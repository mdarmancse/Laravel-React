<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\CourseFeatureModel;

class HomeController extends Controller
{
    function getCourseData(){


        $result=CourseFeatureModel::all();
        return $result;

    }
}
