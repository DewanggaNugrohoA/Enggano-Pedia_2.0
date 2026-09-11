<?php

ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

// Register shutdown function to catch unhandled Fatal Errors (e.g. Memory, Syntax, Class Not Found)
register_shutdown_function(function () {
    $error = error_get_last();
    if ($error !== null && in_array($error['type'], [E_ERROR, E_PARSE, E_CORE_ERROR, E_COMPILE_ERROR])) {
        if (!headers_sent()) {
            http_response_code(500);
            header('Content-Type: text/plain; charset=utf-8');
        }
        echo "=== Vercel PHP Fatal Error ===\n\n";
        echo "Message: " . $error['message'] . "\n";
        echo "File: " . $error['file'] . " (Line " . $error['line'] . ")\n";
    }
});

try {
    if (!defined('LARAVEL_START')) {
        define('LARAVEL_START', microtime(true));
    }

    // Setup writable storage directory in /tmp for Vercel Serverless environment
    $storageDirs = [
        '/tmp/storage/framework/views',
        '/tmp/storage/framework/cache/data',
        '/tmp/storage/framework/sessions',
        '/tmp/storage/logs',
        '/tmp/bootstrap/cache',
    ];

    foreach ($storageDirs as $dir) {
        if (!is_dir($dir)) {
            @mkdir($dir, 0755, true);
        }
    }

    $sqliteFile = '/tmp/database.sqlite';
    if (!file_exists($sqliteFile)) {
        @touch($sqliteFile);
    }

    putenv("DB_DATABASE={$sqliteFile}");
    $_ENV['DB_DATABASE'] = $sqliteFile;
    putenv("APP_STORAGE_PATH=/tmp/storage");
    $_ENV['APP_STORAGE_PATH'] = '/tmp/storage';

    // Register Composer autoloader
    $autoloader = __DIR__ . '/../vendor/autoload.php';
    if (!file_exists($autoloader)) {
        throw new Exception("Autoloader not found at: {$autoloader}");
    }
    require_once $autoloader;

    // Bootstrap Laravel
    $bootstrap = __DIR__ . '/../bootstrap/app.php';
    if (!file_exists($bootstrap)) {
        throw new Exception("Bootstrap file not found at: {$bootstrap}");
    }
    $app = require_once $bootstrap;

    if (method_exists($app, 'useStoragePath')) {
        $app->useStoragePath('/tmp/storage');
    }

    $app->handleRequest(\Illuminate\Http\Request::capture());
} catch (\Throwable $e) {
    if (!headers_sent()) {
        http_response_code(500);
        header('Content-Type: text/plain; charset=utf-8');
    }
    echo "=== Vercel Laravel Execution Error ===\n\n";
    echo "Message: " . $e->getMessage() . "\n";
    echo "File: " . $e->getFile() . " (Line " . $e->getLine() . ")\n\n";
    echo "Trace:\n" . $e->getTraceAsString() . "\n";
}
