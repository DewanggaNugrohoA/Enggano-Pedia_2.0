<?php

use App\Http\Controllers\PageController;
use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/transportasi', [PageController::class, 'transportasi'])->name('transportasi');
Route::get('/wisata', [PageController::class, 'wisata'])->name('wisata');
Route::get('/produk', [PageController::class, 'produk'])->name('produk');
Route::get('/penginapan', [PageController::class, 'penginapan'])->name('penginapan');
Route::get('/budaya', [PageController::class, 'budaya'])->name('budaya');

require __DIR__.'/auth.php';
