<?php namespace smashserver\Controllers;use Code_Alchemy\AngularJS\Helpers\AngularJS_Request_Data;use Code_Alchemy\Controllers\Custom_Controller;use Code_Alchemy\HTTP\Send_CORS_Headers;use Code_Alchemy\JSON\Displayed_JSON_Output;
use smashserver\Components\Rendering\Smash_to_PDF;

/**
 * Class Home_Ctrl
 * @package smashserver\Controllers
 *
 * CUSTOM CONTROLLER WITH SUPPORT FOR CORS
 *
 * (c) 2016 Alquemedia SAS <info@alquemedia.com>
 *
 */
class Home_Ctrl extends  Custom_Controller {

    /**
     * @param array $data   This is data that will be consumed by the Layout and Views.
     * @param array $request_data This is POST+GET data, combined with data sent from angularjs,
     *  the same as the $_POST+$_GET super global
     * @param string $layout This indicates which layout will be used. Leave alone for no changes.
     */
    public function __construct( array &$data, array $request_data, &$layout ){

        new Send_CORS_Headers();    // Send CORS for cross-browser support

        new Displayed_JSON_Output( new Smash_to_PDF($request_data['json'],$request_data['template']) );

    }

}