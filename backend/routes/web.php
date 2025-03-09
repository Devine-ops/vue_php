<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

// Para a rota tradicional (geralmente usada para páginas web)
Route::get('/', function () {
    return view('welcome');
});

