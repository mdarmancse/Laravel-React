<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/getCourseData','HomeController@getCourseData');
Route::get('/getPlanData','HomeController@getPlanData');
Route::get('/getPaymentData','HomeController@getPaymentData');
Route::get('/getMoreSeriesData','HomeController@getMoreSeriesData');








Route::get('/', function () {
    return view('index');
});
Route::get('{ReactRouterPath}', function () {
    return view('index');
})->where('ReactRouterPath','.*');
