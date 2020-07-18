<?php

namespace App\Http\Controllers;

use App\MoreSeriesModel;
use Illuminate\Http\Request;
use App\CourseFeatureModel;
use App\CoursePlanModel;
use App\PaymentGuideModel;

class HomeController extends Controller
{
    function getCourseData(){
        $result=CourseFeatureModel::all();
        return $result;

    }
    function getPlanData(){
        $result=CoursePlanModel::all();
        return $result;
    }
    function getPaymentData(){
        $result=PaymentGuideModel::all();
        return $result;
    }
    function getMoreSeriesData(){
        $result=MoreSeriesModel::all();
        return $result;
    }
}
