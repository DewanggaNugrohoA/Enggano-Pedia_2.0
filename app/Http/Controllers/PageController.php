<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function home()
    {
        return Inertia::render('Home');
    }

    public function budaya()
    {
        return Inertia::render('Budaya');
    }

    public function transportasi()
    {
        return Inertia::render('Transportasi');
    }

    public function wisata()
    {
        return Inertia::render('Wisata');
    }

    public function produk()
    {
        return Inertia::render('Produk');
    }

    public function penginapan()
    {
        return Inertia::render('Penginapan');
    }
}
