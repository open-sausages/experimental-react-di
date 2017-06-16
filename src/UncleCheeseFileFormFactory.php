<?php

namespace UncleCheese\TestAssets;

use SilverStripe\ORM\DataExtension;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\DropdownField;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\CheckboxSetField;

class UncleCheeseFileFormFactory extends DataExtension
{
    public function updateFormFields(FieldList $fields)
    {
        $fields->addFieldToTab('Editor.Details', DropdownField::create(
            'Country',
            'Country',
            [
                'CA' => 'Canada',
                'UK' => 'United Kingdom',
                'US' => 'United States',
                'NZ' => 'New Zealand'
            ]
        ));
        $fields->addFieldToTab('Editor.Details', DropdownField::create(
            'State',
            'State',
            ['NY' => 'New York', 'VT' => 'Vermont', 'OH' => 'Ohio']
        ));
        $fields->addFieldToTab('Editor.Details', TextField::create('PostalCode', 'Postal code'));
        $fields->addFieldTotab('Editor.Details', TextField::create('PhoneNumber', 'Phone number'));
        $fields->addFieldToTab('Editor.Details', TextField::create('Price'));
        $fields->addFieldToTab('Editor.Details', CheckboxSetField::create('PaymentOptions','Payment options', [
            'paypal' => 'Paypal',
            'bank' => 'Bank transfer',
            'cc' => 'Credit card',
            'bitcoin' => 'Bitcoin'
        ]));
    }
}