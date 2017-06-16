<?php

namespace UncleCheese\TestAssets;

use SilverStripe\ORM\DataExtension;

class UncleCheeseFile extends DataExtension
{
    private static $db = [
        'Country' => 'Varchar(2)',
        'State' => 'Varchar(2)',
        'PostalCode' => 'Varchar',
        'PhoneNumber' => 'Varchar',
        'Price' => 'Varchar',
        'PaymentOptions' => 'Varchar'
    ];
}