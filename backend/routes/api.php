<?php

use App\Http\Controllers\AuthController;

// Rota de registro para a API (com o prefixo api)
Route::prefix('api')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
});

