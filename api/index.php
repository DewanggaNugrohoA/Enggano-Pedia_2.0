<?php

use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

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

// Ensure SQLite database exists in /tmp if default DB is used
$sqliteFile = '/tmp/database.sqlite';
if (!file_exists($sqliteFile)) {
    @touch($sqliteFile);
}

putenv("DB_DATABASE={$sqliteFile}");
$_ENV['DB_DATABASE'] = $sqliteFile;
putenv("APP_STORAGE_PATH=/tmp/storage");
$_ENV['APP_STORAGE_PATH'] = '/tmp/storage';

try {
    // Register the Composer autoloader...
    require __DIR__ . '/../vendor/autoload.php';

    // Bootstrap Laravel...
    $app = require_once __DIR__ . '/../bootstrap/app.php';

    if (method_exists($app, 'useStoragePath')) {
        $app->useStoragePath('/tmp/storage');
    }

    $app->handleRequest(Request::capture());
} catch (\Throwable $e) {
    http_response_code(500);
    header('Content-Type: text/plain; charset=utf-8');
    echo "=== Vercel Laravel Execution Error ===\n\n";
    echo "Message: " . $e->getMessage() . "\n";
    echo "File: " . $e->getFile() . " (Line " . $e->getLine() . ")\n\n";
    echo "Trace:\n" . $e->getTraceAsString() . "\n";
}
