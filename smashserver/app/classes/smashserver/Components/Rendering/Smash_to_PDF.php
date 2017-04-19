<?php namespace smashserver\Components\Rendering;

use Code_Alchemy\Core\Array_Representable_Object;

/**
 * Class Smash_to_PDF
 * @package smashserver\Components\Rendering
 *
 * Smashes a JSON (array) and an HTML template into a PDF
 */
class Smash_to_PDF extends Array_Representable_Object {

	/**
	 * Smash_to_PDF constructor.
	 *
	 * @param array $data
	 * @param string $htmlTemplate
	 */
	public function __construct( $data, $htmlTemplate) {

		if ( $this->isValidData($data,$htmlTemplate) )

			$this->processData($data,$htmlTemplate);

		$this->signature = [
			"service"=> "Smash to PDF",
			"author" => "David Greenberg <david@alquemedia.com>",
			"version" => "0.1",
			"license" => "MIT Open Source License"

		];

	}

	private function processData( array $data, $template ){

	}

	/**
	 * Is the data valid?
	 * @param $data
	 * @param $template
	 *
	 * @return bool
	 */
	private function isValidData( $data, $template ){

		if (! is_array($data) || ! count($data)){


			$this->result = "error";

			$this->error = "Parameter <json> must be a valid JSON object or array";

			return false;
		}

		if ( ! is_string($template) || ! strlen($template)){

			$this->result = "error";

			$this->error = "Parameter <template> must be a valid HTML string";

			return false;


		}

		return true;
	}
}