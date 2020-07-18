<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MoreSeriesModel extends Model
{
    protected $table='more_series';
    protected $primaryKey='id';
    public $incrementing=true;
    protected $keyType='int';
    public $timestamps=false;
}
