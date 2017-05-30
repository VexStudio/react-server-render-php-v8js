<?php

// get current page uri
$currentPage = $_SERVER['REQUEST_URI'];

// send uri to js application
$injectCurrentPageLocation = "var __CurrentPageLocation__ = '$currentPage';";

// get app bundle source
$js_app = file_get_contents('./js_app/build/app.js');

// execute js bundle
(new V8Js())->executeString($injectCurrentPageLocation . $js_app);