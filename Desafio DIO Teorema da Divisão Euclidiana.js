<!DOCTYPE html>
<html class="" lang="pt-br"><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8"><style id="autocompletion.css">.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {    background-color: #CAD6FA;    z-index: 1;}.ace_dark.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {    background-color: #3a674e;}.ace_editor.ace_autocomplete .ace_line-hover {    border: 1px solid #abbffe;    margin-top: -1px;    background: rgba(233,233,253,0.4);    position: absolute;    z-index: 2;}.ace_dark.ace_editor.ace_autocomplete .ace_line-hover {    border: 1px solid rgba(109, 150, 13, 0.8);    background: rgba(58, 103, 78, 0.62);}.ace_completion-meta {    opacity: 0.5;    margin: 0.9em;}.ace_completion-message {    color: blue;}.ace_editor.ace_autocomplete .ace_completion-highlight{    color: #2d69c7;}.ace_dark.ace_editor.ace_autocomplete .ace_completion-highlight{    color: #93ca12;}.ace_editor.ace_autocomplete {    width: 300px;    z-index: 200000;    border: 1px lightgray solid;    position: fixed;    box-shadow: 2px 3px 5px rgba(0,0,0,.2);    line-height: 1.4;    background: #fefefe;    color: #111;}.ace_dark.ace_editor.ace_autocomplete {    border: 1px #484747 solid;    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.51);    line-height: 1.4;    background: #25282c;    color: #c1c1c1;}
/*# sourceURL=ace/css/autocompletion.css */</style><style id="snippets.css">.ace_snippet-marker {    -moz-box-sizing: border-box;    box-sizing: border-box;    background: rgba(194, 193, 208, 0.09);    border: 1px dotted rgba(211, 208, 235, 0.62);    position: absolute;}
/*# sourceURL=ace/css/snippets.css */</style><style id="ace-xcode">.ace-xcode .ace_gutter {background: #e8e8e8;color: #333}.ace-xcode .ace_print-margin {width: 1px;background: #e8e8e8}.ace-xcode {background-color: #FFFFFF;color: #000000}.ace-xcode .ace_cursor {color: #000000}.ace-xcode .ace_marker-layer .ace_selection {background: #B5D5FF}.ace-xcode.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #FFFFFF;}.ace-xcode .ace_marker-layer .ace_step {background: rgb(198, 219, 174)}.ace-xcode .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid #BFBFBF}.ace-xcode .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.071)}.ace-xcode .ace_gutter-active-line {background-color: rgba(0, 0, 0, 0.071)}.ace-xcode .ace_marker-layer .ace_selected-word {border: 1px solid #B5D5FF}.ace-xcode .ace_constant.ace_language,.ace-xcode .ace_keyword,.ace-xcode .ace_meta,.ace-xcode .ace_variable.ace_language {color: #C800A4}.ace-xcode .ace_invisible {color: #BFBFBF}.ace-xcode .ace_constant.ace_character,.ace-xcode .ace_constant.ace_other {color: #275A5E}.ace-xcode .ace_constant.ace_numeric {color: #3A00DC}.ace-xcode .ace_entity.ace_other.ace_attribute-name,.ace-xcode .ace_support.ace_constant,.ace-xcode .ace_support.ace_function {color: #450084}.ace-xcode .ace_fold {background-color: #C800A4;border-color: #000000}.ace-xcode .ace_entity.ace_name.ace_tag,.ace-xcode .ace_support.ace_class,.ace-xcode .ace_support.ace_type {color: #790EAD}.ace-xcode .ace_storage {color: #C900A4}.ace-xcode .ace_string {color: #DF0002}.ace-xcode .ace_comment {color: #008E00}.ace-xcode .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==) right repeat-y}
/*# sourceURL=ace/css/ace-xcode */</style><style id="ace-twilight">.ace-twilight .ace_gutter {background: #232323;color: #E2E2E2}.ace-twilight .ace_print-margin {width: 1px;background: #232323}.ace-twilight {background-color: #141414;color: #F8F8F8}.ace-twilight .ace_cursor {color: #A7A7A7}.ace-twilight .ace_marker-layer .ace_selection {background: rgba(221, 240, 255, 0.20)}.ace-twilight.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #141414;}.ace-twilight .ace_marker-layer .ace_step {background: rgb(102, 82, 0)}.ace-twilight .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgba(255, 255, 255, 0.25)}.ace-twilight .ace_marker-layer .ace_active-line {background: rgba(255, 255, 255, 0.031)}.ace-twilight .ace_gutter-active-line {background-color: rgba(255, 255, 255, 0.031)}.ace-twilight .ace_marker-layer .ace_selected-word {border: 1px solid rgba(221, 240, 255, 0.20)}.ace-twilight .ace_invisible {color: rgba(255, 255, 255, 0.25)}.ace-twilight .ace_keyword,.ace-twilight .ace_meta {color: #CDA869}.ace-twilight .ace_constant,.ace-twilight .ace_constant.ace_character,.ace-twilight .ace_constant.ace_character.ace_escape,.ace-twilight .ace_constant.ace_other,.ace-twilight .ace_heading,.ace-twilight .ace_markup.ace_heading,.ace-twilight .ace_support.ace_constant {color: #CF6A4C}.ace-twilight .ace_invalid.ace_illegal {color: #F8F8F8;background-color: rgba(86, 45, 86, 0.75)}.ace-twilight .ace_invalid.ace_deprecated {text-decoration: underline;font-style: italic;color: #D2A8A1}.ace-twilight .ace_support {color: #9B859D}.ace-twilight .ace_fold {background-color: #AC885B;border-color: #F8F8F8}.ace-twilight .ace_support.ace_function {color: #DAD085}.ace-twilight .ace_list,.ace-twilight .ace_markup.ace_list,.ace-twilight .ace_storage {color: #F9EE98}.ace-twilight .ace_entity.ace_name.ace_function,.ace-twilight .ace_meta.ace_tag {color: #AC885B}.ace-twilight .ace_string {color: #8F9D6A}.ace-twilight .ace_string.ace_regexp {color: #E9C062}.ace-twilight .ace_comment {font-style: italic;color: #5F5A60}.ace-twilight .ace_variable {color: #7587A6}.ace-twilight .ace_xml-pe {color: #494949}.ace-twilight .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWMQERFpYLC1tf0PAAgOAnPnhxyiAAAAAElFTkSuQmCC) right repeat-y}
/*# sourceURL=ace/css/ace-twilight */</style><style id="ace-tomorrow-night">.ace-tomorrow-night .ace_gutter {background: #25282c;color: #C5C8C6}.ace-tomorrow-night .ace_print-margin {width: 1px;background: #25282c}.ace-tomorrow-night {background-color: #1D1F21;color: #C5C8C6}.ace-tomorrow-night .ace_cursor {color: #AEAFAD}.ace-tomorrow-night .ace_marker-layer .ace_selection {background: #373B41}.ace-tomorrow-night.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #1D1F21;}.ace-tomorrow-night .ace_marker-layer .ace_step {background: rgb(102, 82, 0)}.ace-tomorrow-night .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid #4B4E55}.ace-tomorrow-night .ace_marker-layer .ace_active-line {background: #282A2E}.ace-tomorrow-night .ace_gutter-active-line {background-color: #282A2E}.ace-tomorrow-night .ace_marker-layer .ace_selected-word {border: 1px solid #373B41}.ace-tomorrow-night .ace_invisible {color: #4B4E55}.ace-tomorrow-night .ace_keyword,.ace-tomorrow-night .ace_meta,.ace-tomorrow-night .ace_storage,.ace-tomorrow-night .ace_storage.ace_type,.ace-tomorrow-night .ace_support.ace_type {color: #B294BB}.ace-tomorrow-night .ace_keyword.ace_operator {color: #8ABEB7}.ace-tomorrow-night .ace_constant.ace_character,.ace-tomorrow-night .ace_constant.ace_language,.ace-tomorrow-night .ace_constant.ace_numeric,.ace-tomorrow-night .ace_keyword.ace_other.ace_unit,.ace-tomorrow-night .ace_support.ace_constant,.ace-tomorrow-night .ace_variable.ace_parameter {color: #DE935F}.ace-tomorrow-night .ace_constant.ace_other {color: #CED1CF}.ace-tomorrow-night .ace_invalid {color: #CED2CF;background-color: #DF5F5F}.ace-tomorrow-night .ace_invalid.ace_deprecated {color: #CED2CF;background-color: #B798BF}.ace-tomorrow-night .ace_fold {background-color: #81A2BE;border-color: #C5C8C6}.ace-tomorrow-night .ace_entity.ace_name.ace_function,.ace-tomorrow-night .ace_support.ace_function,.ace-tomorrow-night .ace_variable {color: #81A2BE}.ace-tomorrow-night .ace_support.ace_class,.ace-tomorrow-night .ace_support.ace_type {color: #F0C674}.ace-tomorrow-night .ace_heading,.ace-tomorrow-night .ace_markup.ace_heading,.ace-tomorrow-night .ace_string {color: #B5BD68}.ace-tomorrow-night .ace_entity.ace_name.ace_tag,.ace-tomorrow-night .ace_entity.ace_other.ace_attribute-name,.ace-tomorrow-night .ace_meta.ace_tag,.ace-tomorrow-night .ace_string.ace_regexp,.ace-tomorrow-night .ace_variable {color: #CC6666}.ace-tomorrow-night .ace_comment {color: #969896}.ace-tomorrow-night .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHB3d/8PAAOIAdULw8qMAAAAAElFTkSuQmCC) right repeat-y}
/*# sourceURL=ace/css/ace-tomorrow-night */</style><style id="ace-tomorrow">.ace-tomorrow .ace_gutter {background: #f6f6f6;color: #4D4D4C}.ace-tomorrow .ace_print-margin {width: 1px;background: #f6f6f6}.ace-tomorrow {background-color: #FFFFFF;color: #4D4D4C}.ace-tomorrow .ace_cursor {color: #AEAFAD}.ace-tomorrow .ace_marker-layer .ace_selection {background: #D6D6D6}.ace-tomorrow.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #FFFFFF;}.ace-tomorrow .ace_marker-layer .ace_step {background: rgb(255, 255, 0)}.ace-tomorrow .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid #D1D1D1}.ace-tomorrow .ace_marker-layer .ace_active-line {background: #EFEFEF}.ace-tomorrow .ace_gutter-active-line {background-color : #dcdcdc}.ace-tomorrow .ace_marker-layer .ace_selected-word {border: 1px solid #D6D6D6}.ace-tomorrow .ace_invisible {color: #D1D1D1}.ace-tomorrow .ace_keyword,.ace-tomorrow .ace_meta,.ace-tomorrow .ace_storage,.ace-tomorrow .ace_storage.ace_type,.ace-tomorrow .ace_support.ace_type {color: #8959A8}.ace-tomorrow .ace_keyword.ace_operator {color: #3E999F}.ace-tomorrow .ace_constant.ace_character,.ace-tomorrow .ace_constant.ace_language,.ace-tomorrow .ace_constant.ace_numeric,.ace-tomorrow .ace_keyword.ace_other.ace_unit,.ace-tomorrow .ace_support.ace_constant,.ace-tomorrow .ace_variable.ace_parameter {color: #F5871F}.ace-tomorrow .ace_constant.ace_other {color: #666969}.ace-tomorrow .ace_invalid {color: #FFFFFF;background-color: #C82829}.ace-tomorrow .ace_invalid.ace_deprecated {color: #FFFFFF;background-color: #8959A8}.ace-tomorrow .ace_fold {background-color: #4271AE;border-color: #4D4D4C}.ace-tomorrow .ace_entity.ace_name.ace_function,.ace-tomorrow .ace_support.ace_function,.ace-tomorrow .ace_variable {color: #4271AE}.ace-tomorrow .ace_support.ace_class,.ace-tomorrow .ace_support.ace_type {color: #C99E00}.ace-tomorrow .ace_heading,.ace-tomorrow .ace_markup.ace_heading,.ace-tomorrow .ace_string {color: #718C00}.ace-tomorrow .ace_entity.ace_name.ace_tag,.ace-tomorrow .ace_entity.ace_other.ace_attribute-name,.ace-tomorrow .ace_meta.ace_tag,.ace-tomorrow .ace_string.ace_regexp,.ace-tomorrow .ace_variable {color: #C82829}.ace-tomorrow .ace_comment {color: #8E908C}.ace-tomorrow .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bdu3f/BwAlfgctduB85QAAAABJRU5ErkJggg==) right repeat-y}
/*# sourceURL=ace/css/ace-tomorrow */</style><style id="ace-terminal-theme">.ace-terminal-theme .ace_gutter {background: #1a0005;color: steelblue}.ace-terminal-theme .ace_print-margin {width: 1px;background: #1a1a1a}.ace-terminal-theme {background-color: black;color: #DEDEDE}.ace-terminal-theme .ace_cursor {color: #9F9F9F}.ace-terminal-theme .ace_marker-layer .ace_selection {background: #424242}.ace-terminal-theme.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px black;}.ace-terminal-theme .ace_marker-layer .ace_step {background: rgb(0, 0, 0)}.ace-terminal-theme .ace_marker-layer .ace_bracket {background: #090;}.ace-terminal-theme .ace_marker-layer .ace_bracket-start {background: #090;}.ace-terminal-theme .ace_marker-layer .ace_bracket-unmatched {margin: -1px 0 0 -1px;border: 1px solid #900}.ace-terminal-theme .ace_marker-layer .ace_active-line {background: #2A2A2A}.ace-terminal-theme .ace_gutter-active-line {background-color: #2A112A}.ace-terminal-theme .ace_marker-layer .ace_selected-word {border: 1px solid #424242}.ace-terminal-theme .ace_invisible {color: #343434}.ace-terminal-theme .ace_keyword,.ace-terminal-theme .ace_meta,.ace-terminal-theme .ace_storage,.ace-terminal-theme .ace_storage.ace_type,.ace-terminal-theme .ace_support.ace_type {color: tomato}.ace-terminal-theme .ace_keyword.ace_operator {color: deeppink}.ace-terminal-theme .ace_constant.ace_character,.ace-terminal-theme .ace_constant.ace_language,.ace-terminal-theme .ace_constant.ace_numeric,.ace-terminal-theme .ace_keyword.ace_other.ace_unit,.ace-terminal-theme .ace_support.ace_constant,.ace-terminal-theme .ace_variable.ace_parameter {color: #E78C45}.ace-terminal-theme .ace_constant.ace_other {color: gold}.ace-terminal-theme .ace_invalid {color: yellow;background-color: red}.ace-terminal-theme .ace_invalid.ace_deprecated {color: #CED2CF;background-color: #B798BF}.ace-terminal-theme .ace_fold {background-color: #7AA6DA;border-color: #DEDEDE}.ace-terminal-theme .ace_entity.ace_name.ace_function,.ace-terminal-theme .ace_support.ace_function,.ace-terminal-theme .ace_variable {color: #7AA6DA}.ace-terminal-theme .ace_support.ace_class,.ace-terminal-theme .ace_support.ace_type {color: #E7C547}.ace-terminal-theme .ace_heading,.ace-terminal-theme .ace_string {color: #B9CA4A}.ace-terminal-theme .ace_entity.ace_name.ace_tag,.ace-terminal-theme .ace_entity.ace_other.ace_attribute-name,.ace-terminal-theme .ace_meta.ace_tag,.ace-terminal-theme .ace_string.ace_regexp,.ace-terminal-theme .ace_variable {color: #D54E53}.ace-terminal-theme .ace_comment {color: orangered}.ace-terminal-theme .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYLBWV/8PAAK4AYnhiq+xAAAAAElFTkSuQmCC) right repeat-y;}
/*# sourceURL=ace/css/ace-terminal-theme */</style><style id="ace-sqlserver">.ace-sqlserver .ace_gutter {background: #ebebeb;color: #333;overflow: hidden;}.ace-sqlserver .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-sqlserver {background-color: #FFFFFF;color: black;}.ace-sqlserver .ace_identifier {color: black;}.ace-sqlserver .ace_keyword {color: #0000FF;}.ace-sqlserver .ace_numeric {color: black;}.ace-sqlserver .ace_storage {color: #11B7BE;}.ace-sqlserver .ace_keyword.ace_operator,.ace-sqlserver .ace_lparen,.ace-sqlserver .ace_rparen,.ace-sqlserver .ace_punctuation {color: #808080;}.ace-sqlserver .ace_set.ace_statement {color: #0000FF;text-decoration: underline;}.ace-sqlserver .ace_cursor {color: black;}.ace-sqlserver .ace_invisible {color: rgb(191, 191, 191);}.ace-sqlserver .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-sqlserver .ace_constant.ace_language {color: #979797;}.ace-sqlserver .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-sqlserver .ace_invalid {background-color: rgb(153, 0, 0);color: white;}.ace-sqlserver .ace_support.ace_function {color: #FF00FF;}.ace-sqlserver .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-sqlserver .ace_class {color: #008080;}.ace-sqlserver .ace_support.ace_other {color: #6D79DE;}.ace-sqlserver .ace_variable.ace_parameter {font-style: italic;color: #FD971F;}.ace-sqlserver .ace_comment {color: #008000;}.ace-sqlserver .ace_constant.ace_numeric {color: black;}.ace-sqlserver .ace_variable {color: rgb(49, 132, 149);}.ace-sqlserver .ace_xml-pe {color: rgb(104, 104, 91);}.ace-sqlserver .ace_support.ace_storedprocedure {color: #800000;}.ace-sqlserver .ace_heading {color: rgb(12, 7, 255);}.ace-sqlserver .ace_list {color: rgb(185, 6, 144);}.ace-sqlserver .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-sqlserver .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-sqlserver .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-sqlserver .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-sqlserver .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-sqlserver .ace_gutter-active-line {background-color: #dcdcdc;}.ace-sqlserver .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-sqlserver .ace_meta.ace_tag {color: #0000FF;}.ace-sqlserver .ace_string.ace_regex {color: #FF0000;}.ace-sqlserver .ace_string {color: #FF0000;}.ace-sqlserver .ace_entity.ace_other.ace_attribute-name {color: #994409;}.ace-sqlserver .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}
/*# sourceURL=ace/css/ace-sqlserver */</style><style id="ace-github">.ace-github .ace_gutter {background: #e8e8e8;color: #AAA;}.ace-github  {background: #fff;color: #000;}.ace-github .ace_keyword {font-weight: bold;}.ace-github .ace_string {color: #D14;}.ace-github .ace_variable.ace_class {color: teal;}.ace-github .ace_constant.ace_numeric {color: #099;}.ace-github .ace_constant.ace_buildin {color: #0086B3;}.ace-github .ace_support.ace_function {color: #0086B3;}.ace-github .ace_comment {color: #998;font-style: italic;}.ace-github .ace_variable.ace_language  {color: #0086B3;}.ace-github .ace_paren {font-weight: bold;}.ace-github .ace_boolean {font-weight: bold;}.ace-github .ace_string.ace_regexp {color: #009926;font-weight: normal;}.ace-github .ace_variable.ace_instance {color: teal;}.ace-github .ace_constant.ace_language {font-weight: bold;}.ace-github .ace_cursor {color: black;}.ace-github.ace_focus .ace_marker-layer .ace_active-line {background: rgb(255, 255, 204);}.ace-github .ace_marker-layer .ace_active-line {background: rgb(245, 245, 245);}.ace-github .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-github.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;}.ace-github.ace_nobold .ace_line > span {font-weight: normal !important;}.ace-github .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-github .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-github .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-github .ace_gutter-active-line {background-color : rgba(0, 0, 0, 0.07);}.ace-github .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-github .ace_invisible {color: #BFBFBF}.ace-github .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-github .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}
/*# sourceURL=ace/css/ace-github */</style><style id="ace-eclipse">.ace-eclipse .ace_gutter {background: #ebebeb;border-right: 1px solid rgb(159, 159, 159);color: rgb(136, 136, 136);}.ace-eclipse .ace_print-margin {width: 1px;background: #ebebeb;}.ace-eclipse {background-color: #FFFFFF;color: black;}.ace-eclipse .ace_fold {background-color: rgb(60, 76, 114);}.ace-eclipse .ace_cursor {color: black;}.ace-eclipse .ace_storage,.ace-eclipse .ace_keyword,.ace-eclipse .ace_variable {color: rgb(127, 0, 85);}.ace-eclipse .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-eclipse .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-eclipse .ace_function {color: rgb(60, 76, 114);}.ace-eclipse .ace_string {color: rgb(42, 0, 255);}.ace-eclipse .ace_comment {color: rgb(113, 150, 130);}.ace-eclipse .ace_comment.ace_doc {color: rgb(63, 95, 191);}.ace-eclipse .ace_comment.ace_doc.ace_tag {color: rgb(127, 159, 191);}.ace-eclipse .ace_constant.ace_numeric {color: darkblue;}.ace-eclipse .ace_tag {color: rgb(25, 118, 116);}.ace-eclipse .ace_type {color: rgb(127, 0, 127);}.ace-eclipse .ace_xml-pe {color: rgb(104, 104, 91);}.ace-eclipse .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-eclipse .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-eclipse .ace_meta.ace_tag {color:rgb(25, 118, 116);}.ace-eclipse .ace_invisible {color: #ddd;}.ace-eclipse .ace_entity.ace_other.ace_attribute-name {color:rgb(127, 0, 127);}.ace-eclipse .ace_marker-layer .ace_step {background: rgb(255, 255, 0);}.ace-eclipse .ace_active-line {background: rgb(232, 242, 254);}.ace-eclipse .ace_gutter-active-line {background-color : #DADADA;}.ace-eclipse .ace_marker-layer .ace_selected-word {border: 1px solid rgb(181, 213, 255);}.ace-eclipse .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}
/*# sourceURL=ace/css/ace-eclipse */</style><style id="ace-dreamweaver">.ace-dreamweaver .ace_gutter {background: #e8e8e8;color: #333;}.ace-dreamweaver .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-dreamweaver {background-color: #FFFFFF;color: black;}.ace-dreamweaver .ace_fold {background-color: #757AD8;}.ace-dreamweaver .ace_cursor {color: black;}.ace-dreamweaver .ace_invisible {color: rgb(191, 191, 191);}.ace-dreamweaver .ace_storage,.ace-dreamweaver .ace_keyword {color: blue;}.ace-dreamweaver .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-dreamweaver .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-dreamweaver .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-dreamweaver .ace_invalid {background-color: rgb(153, 0, 0);color: white;}.ace-dreamweaver .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-dreamweaver .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-dreamweaver .ace_support.ace_type,.ace-dreamweaver .ace_support.ace_class {color: #009;}.ace-dreamweaver .ace_support.ace_php_tag {color: #f00;}.ace-dreamweaver .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-dreamweaver .ace_string {color: #00F;}.ace-dreamweaver .ace_comment {color: rgb(76, 136, 107);}.ace-dreamweaver .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-dreamweaver .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-dreamweaver .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-dreamweaver .ace_variable {color: #06F}.ace-dreamweaver .ace_xml-pe {color: rgb(104, 104, 91);}.ace-dreamweaver .ace_entity.ace_name.ace_function {color: #00F;}.ace-dreamweaver .ace_heading {color: rgb(12, 7, 255);}.ace-dreamweaver .ace_list {color:rgb(185, 6, 144);}.ace-dreamweaver .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-dreamweaver .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-dreamweaver .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-dreamweaver .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-dreamweaver .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-dreamweaver .ace_gutter-active-line {background-color : #DCDCDC;}.ace-dreamweaver .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-dreamweaver .ace_meta.ace_tag {color:#009;}.ace-dreamweaver .ace_meta.ace_tag.ace_anchor {color:#060;}.ace-dreamweaver .ace_meta.ace_tag.ace_form {color:#F90;}.ace-dreamweaver .ace_meta.ace_tag.ace_image {color:#909;}.ace-dreamweaver .ace_meta.ace_tag.ace_script {color:#900;}.ace-dreamweaver .ace_meta.ace_tag.ace_style {color:#909;}.ace-dreamweaver .ace_meta.ace_tag.ace_table {color:#099;}.ace-dreamweaver .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-dreamweaver .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}
/*# sourceURL=ace/css/ace-dreamweaver */</style><style id="ace-dracula">.ace-dracula .ace_gutter {background: #282a36;color: rgb(144,145,148)}.ace-dracula .ace_print-margin {width: 1px;background: #44475a}.ace-dracula {background-color: #282a36;color: #f8f8f2}.ace-dracula .ace_cursor {color: #f8f8f0}.ace-dracula .ace_marker-layer .ace_selection {background: #44475a}.ace-dracula.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #282a36;border-radius: 2px}.ace-dracula .ace_marker-layer .ace_step {background: rgb(198, 219, 174)}.ace-dracula .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid #a29709}.ace-dracula .ace_marker-layer .ace_active-line {background: #44475a}.ace-dracula .ace_gutter-active-line {background-color: #44475a}.ace-dracula .ace_marker-layer .ace_selected-word {box-shadow: 0px 0px 0px 1px #a29709;border-radius: 3px;}.ace-dracula .ace_fold {background-color: #50fa7b;border-color: #f8f8f2}.ace-dracula .ace_keyword {color: #ff79c6}.ace-dracula .ace_constant.ace_language {color: #bd93f9}.ace-dracula .ace_constant.ace_numeric {color: #bd93f9}.ace-dracula .ace_constant.ace_character {color: #bd93f9}.ace-dracula .ace_constant.ace_character.ace_escape {color: #ff79c6}.ace-dracula .ace_constant.ace_other {color: #bd93f9}.ace-dracula .ace_support.ace_function {color: #8be9fd}.ace-dracula .ace_support.ace_constant {color: #6be5fd}.ace-dracula .ace_support.ace_class {font-style: italic;color: #66d9ef}.ace-dracula .ace_support.ace_type {font-style: italic;color: #66d9ef}.ace-dracula .ace_storage {color: #ff79c6}.ace-dracula .ace_storage.ace_type {font-style: italic;color: #8be9fd}.ace-dracula .ace_invalid {color: #F8F8F0;background-color: #ff79c6}.ace-dracula .ace_invalid.ace_deprecated {color: #F8F8F0;background-color: #bd93f9}.ace-dracula .ace_string {color: #f1fa8c}.ace-dracula .ace_comment {color: #6272a4}.ace-dracula .ace_variable {color: #50fa7b}.ace-dracula .ace_variable.ace_parameter {font-style: italic;color: #ffb86c}.ace-dracula .ace_entity.ace_other.ace_attribute-name {color: #50fa7b}.ace-dracula .ace_entity.ace_name.ace_function {color: #50fa7b}.ace-dracula .ace_entity.ace_name.ace_tag {color: #ff79c6}.ace-dracula .ace_invisible {color: #626680;}.ace-dracula .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHB3d/8PAAOIAdULw8qMAAAAAElFTkSuQmCC) right repeat-y}
/*# sourceURL=ace/css/ace-dracula */</style><style id="ace-chrome">.ace-chrome .ace_gutter {background: #ebebeb;color: #333;overflow : hidden;}.ace-chrome .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-chrome {background-color: #FFFFFF;color: black;}.ace-chrome .ace_cursor {color: black;}.ace-chrome .ace_invisible {color: rgb(191, 191, 191);}.ace-chrome .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-chrome .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-chrome .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-chrome .ace_invalid {background-color: rgb(153, 0, 0);color: white;}.ace-chrome .ace_fold {}.ace-chrome .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-chrome .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-chrome .ace_support.ace_type,.ace-chrome .ace_support.ace_class.ace-chrome .ace_support.ace_other {color: rgb(109, 121, 222);}.ace-chrome .ace_variable.ace_parameter {font-style:italic;color:#FD971F;}.ace-chrome .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-chrome .ace_comment {color: #236e24;}.ace-chrome .ace_comment.ace_doc {color: #236e24;}.ace-chrome .ace_comment.ace_doc.ace_tag {color: #236e24;}.ace-chrome .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-chrome .ace_variable {color: rgb(49, 132, 149);}.ace-chrome .ace_xml-pe {color: rgb(104, 104, 91);}.ace-chrome .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-chrome .ace_heading {color: rgb(12, 7, 255);}.ace-chrome .ace_list {color:rgb(185, 6, 144);}.ace-chrome .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-chrome .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-chrome .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-chrome .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-chrome .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-chrome .ace_gutter-active-line {background-color : #dcdcdc;}.ace-chrome .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-chrome .ace_storage,.ace-chrome .ace_keyword,.ace-chrome .ace_meta.ace_tag {color: rgb(147, 15, 128);}.ace-chrome .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-chrome .ace_string {color: #1A1AA6;}.ace-chrome .ace_entity.ace_other.ace_attribute-name {color: #994409;}.ace-chrome .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}
/*# sourceURL=ace/css/ace-chrome */</style><style id="ace-monokai">.ace-monokai .ace_gutter {background: #2F3129;color: #8F908A}.ace-monokai .ace_print-margin {width: 1px;background: #555651}.ace-monokai {background-color: #272822;color: #F8F8F2}.ace-monokai .ace_cursor {color: #F8F8F0}.ace-monokai .ace_marker-layer .ace_selection {background: #49483E}.ace-monokai.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #272822;}.ace-monokai .ace_marker-layer .ace_step {background: rgb(102, 82, 0)}.ace-monokai .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid #49483E}.ace-monokai .ace_marker-layer .ace_active-line {background: #202020}.ace-monokai .ace_gutter-active-line {background-color: #272727}.ace-monokai .ace_marker-layer .ace_selected-word {border: 1px solid #49483E}.ace-monokai .ace_invisible {color: #52524d}.ace-monokai .ace_entity.ace_name.ace_tag,.ace-monokai .ace_keyword,.ace-monokai .ace_meta.ace_tag,.ace-monokai .ace_storage {color: #F92672}.ace-monokai .ace_punctuation,.ace-monokai .ace_punctuation.ace_tag {color: #fff}.ace-monokai .ace_constant.ace_character,.ace-monokai .ace_constant.ace_language,.ace-monokai .ace_constant.ace_numeric,.ace-monokai .ace_constant.ace_other {color: #AE81FF}.ace-monokai .ace_invalid {color: #F8F8F0;background-color: #F92672}.ace-monokai .ace_invalid.ace_deprecated {color: #F8F8F0;background-color: #AE81FF}.ace-monokai .ace_support.ace_constant,.ace-monokai .ace_support.ace_function {color: #66D9EF}.ace-monokai .ace_fold {background-color: #A6E22E;border-color: #F8F8F2}.ace-monokai .ace_storage.ace_type,.ace-monokai .ace_support.ace_class,.ace-monokai .ace_support.ace_type {font-style: italic;color: #66D9EF}.ace-monokai .ace_entity.ace_name.ace_function,.ace-monokai .ace_entity.ace_other,.ace-monokai .ace_entity.ace_other.ace_attribute-name,.ace-monokai .ace_variable {color: #A6E22E}.ace-monokai .ace_variable.ace_parameter {font-style: italic;color: #FD971F}.ace-monokai .ace_string {color: #E6DB74}.ace-monokai .ace_comment {color: #75715E}.ace-monokai .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y}
/*# sourceURL=ace/css/ace-monokai */</style><style id="error_marker.css">    .error_widget_wrapper {        background: inherit;        color: inherit;        border:none    }    .error_widget {        border-top: solid 2px;        border-bottom: solid 2px;        margin: 5px 0;        padding: 10px 40px;        white-space: pre-wrap;    }    .error_widget.ace_error, .error_widget_arrow.ace_error{        border-color: #ff5a5a    }    .error_widget.ace_warning, .error_widget_arrow.ace_warning{        border-color: #F1D817    }    .error_widget.ace_info, .error_widget_arrow.ace_info{        border-color: #5a5a5a    }    .error_widget.ace_ok, .error_widget_arrow.ace_ok{        border-color: #5aaa5a    }    .error_widget_arrow {        position: absolute;        border: solid 5px;        border-top-color: transparent!important;        border-right-color: transparent!important;        border-left-color: transparent!important;        top: -5px;    }
/*# sourceURL=ace/css/error_marker.css */</style><style id="ace-tm">.ace-tm .ace_gutter {background: #f0f0f0;color: #333;}.ace-tm .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-tm .ace_fold {background-color: #6B72E6;}.ace-tm {background-color: #FFFFFF;color: black;}.ace-tm .ace_cursor {color: black;}.ace-tm .ace_invisible {color: rgb(191, 191, 191);}.ace-tm .ace_storage,.ace-tm .ace_keyword {color: blue;}.ace-tm .ace_constant {color: rgb(197, 6, 11);}.ace-tm .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-tm .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-tm .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-tm .ace_invalid {background-color: rgba(255, 0, 0, 0.1);color: red;}.ace-tm .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-tm .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-tm .ace_support.ace_type,.ace-tm .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-tm .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-tm .ace_string {color: rgb(3, 106, 7);}.ace-tm .ace_comment {color: rgb(76, 136, 107);}.ace-tm .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-tm .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-tm .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-tm .ace_variable {color: rgb(49, 132, 149);}.ace-tm .ace_xml-pe {color: rgb(104, 104, 91);}.ace-tm .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-tm .ace_heading {color: rgb(12, 7, 255);}.ace-tm .ace_list {color:rgb(185, 6, 144);}.ace-tm .ace_meta.ace_tag {color:rgb(0, 22, 142);}.ace-tm .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-tm .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-tm.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;}.ace-tm .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-tm .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-tm .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-tm .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-tm .ace_gutter-active-line {background-color : #dcdcdc;}.ace-tm .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-tm .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}
/*# sourceURL=ace/css/ace-tm */</style><style id="ace_editor.css">.ace_br1 {border-top-left-radius    : 3px;}.ace_br2 {border-top-right-radius   : 3px;}.ace_br3 {border-top-left-radius    : 3px; border-top-right-radius:    3px;}.ace_br4 {border-bottom-right-radius: 3px;}.ace_br5 {border-top-left-radius    : 3px; border-bottom-right-radius: 3px;}.ace_br6 {border-top-right-radius   : 3px; border-bottom-right-radius: 3px;}.ace_br7 {border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px;}.ace_br8 {border-bottom-left-radius : 3px;}.ace_br9 {border-top-left-radius    : 3px; border-bottom-left-radius:  3px;}.ace_br10{border-top-right-radius   : 3px; border-bottom-left-radius:  3px;}.ace_br11{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-left-radius:  3px;}.ace_br12{border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br13{border-top-left-radius    : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br14{border-top-right-radius   : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br15{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;}.ace_editor {position: relative;overflow: hidden;padding: 0;font: 12px/normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;direction: ltr;text-align: left;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}.ace_scroller {position: absolute;overflow: hidden;top: 0;bottom: 0;background-color: inherit;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;cursor: text;}.ace_content {position: absolute;box-sizing: border-box;min-width: 100%;contain: style size layout;font-variant-ligatures: no-common-ligatures;}.ace_dragging .ace_scroller:before{position: absolute;top: 0;left: 0;right: 0;bottom: 0;content: '';background: rgba(250, 250, 250, 0.01);z-index: 1000;}.ace_dragging.ace_dark .ace_scroller:before{background: rgba(0, 0, 0, 0.01);}.ace_selecting, .ace_selecting * {cursor: text !important;}.ace_gutter {position: absolute;overflow : hidden;width: auto;top: 0;bottom: 0;left: 0;cursor: default;z-index: 4;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;contain: style size layout;}.ace_gutter-active-line {position: absolute;left: 0;right: 0;}.ace_scroller.ace_scroll-left {box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;}.ace_gutter-cell {position: absolute;top: 0;left: 0;right: 0;padding-left: 19px;padding-right: 6px;background-repeat: no-repeat;}.ace_gutter-cell.ace_error {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: 2px center;}.ace_gutter-cell.ace_warning {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");background-position: 2px center;}.ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");background-position: 2px center;}.ace_dark .ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");}.ace_scrollbar {contain: strict;position: absolute;right: 0;bottom: 0;z-index: 6;}.ace_scrollbar-inner {position: absolute;cursor: text;left: 0;top: 0;}.ace_scrollbar-v{overflow-x: hidden;overflow-y: scroll;top: 0;}.ace_scrollbar-h {overflow-x: scroll;overflow-y: hidden;left: 0;}.ace_print-margin {position: absolute;height: 100%;}.ace_text-input {position: absolute;z-index: 0;width: 0.5em;height: 1em;opacity: 0;background: transparent;-moz-appearance: none;appearance: none;border: none;resize: none;outline: none;overflow: hidden;font: inherit;padding: 0 1px;margin: 0 -1px;contain: strict;-ms-user-select: text;-moz-user-select: text;-webkit-user-select: text;user-select: text;white-space: pre!important;}.ace_text-input.ace_composition {background: transparent;color: inherit;z-index: 1000;opacity: 1;}.ace_composition_placeholder { color: transparent }.ace_composition_marker { border-bottom: 1px solid;position: absolute;border-radius: 0;margin-top: 1px;}[ace_nocontext=true] {transform: none!important;filter: none!important;clip-path: none!important;mask : none!important;contain: none!important;perspective: none!important;mix-blend-mode: initial!important;z-index: auto;}.ace_layer {z-index: 1;position: absolute;overflow: hidden;word-wrap: normal;white-space: pre;height: 100%;width: 100%;box-sizing: border-box;pointer-events: none;}.ace_gutter-layer {position: relative;width: auto;text-align: right;pointer-events: auto;height: 1000000px;contain: style size layout;}.ace_text-layer {font: inherit !important;position: absolute;height: 1000000px;width: 1000000px;contain: style size layout;}.ace_text-layer > .ace_line, .ace_text-layer > .ace_line_group {contain: style size layout;position: absolute;top: 0;left: 0;right: 0;}.ace_hidpi .ace_text-layer,.ace_hidpi .ace_gutter-layer,.ace_hidpi .ace_content,.ace_hidpi .ace_gutter {contain: strict;will-change: transform;}.ace_hidpi .ace_text-layer > .ace_line, .ace_hidpi .ace_text-layer > .ace_line_group {contain: strict;}.ace_cjk {display: inline-block;text-align: center;}.ace_cursor-layer {z-index: 4;}.ace_cursor {z-index: 4;position: absolute;box-sizing: border-box;border-left: 2px solid;transform: translatez(0);}.ace_multiselect .ace_cursor {border-left-width: 1px;}.ace_slim-cursors .ace_cursor {border-left-width: 1px;}.ace_overwrite-cursors .ace_cursor {border-left-width: 0;border-bottom: 1px solid;}.ace_hidden-cursors .ace_cursor {opacity: 0.2;}.ace_hasPlaceholder .ace_hidden-cursors .ace_cursor {opacity: 0;}.ace_smooth-blinking .ace_cursor {transition: opacity 0.18s;}.ace_animate-blinking .ace_cursor {animation-duration: 1000ms;animation-timing-function: step-end;animation-name: blink-ace-animate;animation-iteration-count: infinite;}.ace_animate-blinking.ace_smooth-blinking .ace_cursor {animation-duration: 1000ms;animation-timing-function: ease-in-out;animation-name: blink-ace-animate-smooth;}@keyframes blink-ace-animate {from, to { opacity: 1; }60% { opacity: 0; }}@keyframes blink-ace-animate-smooth {from, to { opacity: 1; }45% { opacity: 1; }60% { opacity: 0; }85% { opacity: 0; }}.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {position: absolute;z-index: 3;}.ace_marker-layer .ace_selection {position: absolute;z-index: 5;}.ace_marker-layer .ace_bracket {position: absolute;z-index: 6;}.ace_marker-layer .ace_error_bracket {position: absolute;border-bottom: 1px solid #DE5555;border-radius: 0;}.ace_marker-layer .ace_active-line {position: absolute;z-index: 2;}.ace_marker-layer .ace_selected-word {position: absolute;z-index: 4;box-sizing: border-box;}.ace_line .ace_fold {box-sizing: border-box;display: inline-block;height: 11px;margin-top: -2px;vertical-align: middle;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");background-repeat: no-repeat, repeat-x;background-position: center center, top left;color: transparent;border: 1px solid black;border-radius: 2px;cursor: pointer;pointer-events: auto;}.ace_dark .ace_fold {}.ace_fold:hover{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");}.ace_tooltip {background-color: #FFF;background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));border: 1px solid gray;border-radius: 1px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);color: black;max-width: 100%;padding: 3px 4px;position: fixed;z-index: 999999;box-sizing: border-box;cursor: default;white-space: pre;word-wrap: break-word;line-height: normal;font-style: normal;font-weight: normal;letter-spacing: normal;pointer-events: none;}.ace_folding-enabled > .ace_gutter-cell {padding-right: 13px;}.ace_fold-widget {box-sizing: border-box;margin: 0 -12px 0 1px;display: none;width: 11px;vertical-align: top;background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: center;border-radius: 3px;border: 1px solid transparent;cursor: pointer;}.ace_folding-enabled .ace_fold-widget {display: inline-block;   }.ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");}.ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");}.ace_fold-widget:hover {border: 1px solid rgba(0, 0, 0, 0.3);background-color: rgba(255, 255, 255, 0.2);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);}.ace_fold-widget:active {border: 1px solid rgba(0, 0, 0, 0.4);background-color: rgba(0, 0, 0, 0.05);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);}.ace_dark .ace_fold-widget {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");}.ace_dark .ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget:hover {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);background-color: rgba(255, 255, 255, 0.1);}.ace_dark .ace_fold-widget:active {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);}.ace_inline_button {border: 1px solid lightgray;display: inline-block;margin: -1px 8px;padding: 0 5px;pointer-events: auto;cursor: pointer;}.ace_inline_button:hover {border-color: gray;background: rgba(200,200,200,0.2);display: inline-block;pointer-events: auto;}.ace_fold-widget.ace_invalid {background-color: #FFB4B4;border-color: #DE5555;}.ace_fade-fold-widgets .ace_fold-widget {transition: opacity 0.4s ease 0.05s;opacity: 0;}.ace_fade-fold-widgets:hover .ace_fold-widget {transition: opacity 0.05s ease 0.05s;opacity:1;}.ace_underline {text-decoration: underline;}.ace_bold {font-weight: bold;}.ace_nobold .ace_bold {font-weight: normal;}.ace_italic {font-style: italic;}.ace_error-marker {background-color: rgba(255, 0, 0,0.2);position: absolute;z-index: 9;}.ace_highlight-marker {background-color: rgba(255, 255, 0,0.2);position: absolute;z-index: 8;}.ace_mobile-menu {position: absolute;line-height: 1.5;border-radius: 4px;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;background: white;box-shadow: 1px 3px 2px grey;border: 1px solid #dcdcdc;color: black;}.ace_dark > .ace_mobile-menu {background: #333;color: #ccc;box-shadow: 1px 3px 2px grey;border: 1px solid #444;}.ace_mobile-button {padding: 2px;cursor: pointer;overflow: hidden;}.ace_mobile-button:hover {background-color: #eee;opacity:1;}.ace_mobile-button:active {background-color: #ddd;}.ace_placeholder {font-family: arial;transform: scale(0.9);transform-origin: left;white-space: pre;opacity: 0.7;margin: 0 10px;}
/*# sourceURL=ace/css/ace_editor.css */</style><script type="text/javascript" id="www-widgetapi-script" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/www-widgetapi.js" async=""></script><script async="" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/clarity.js"></script><script type="text/javascript" async="" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/amplitude-5.js"></script><script type="text/javascript" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/commons.gz" async="" status="loaded"></script><script type="text/javascript" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/amplitude.gz" async="" status="loaded"></script><script type="text/javascript" async="" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/config.js"></script><script type="text/javascript" async="" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/config_002.js"></script><script type="text/javascript" async="" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/conversion_async.js"></script><script async="" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/analytics_002.js"></script><script async="" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/b12gwzksd7.js"></script><script type="text/javascript" async="" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/events.js"></script><script type="text/javascript" async="" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/events_002.js"></script><script async="" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/5q1spn4z03.js"></script><script async="" src="http://mautic.dio.me/mtc.js"></script><script src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/diffuser.js" async=""></script><script src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/529970670506180.js" async=""></script><script src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/614551849008360.js" async=""></script><script async="" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/fbevents.js"></script><script type="text/javascript" async="" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/uwt.js"></script><script type="text/javascript" async="" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/insight.js"></script><script type="text/javascript" async="" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/analytics_002.js"></script><script src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/iframe_api"></script><script type="text/javascript" async="" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/analytics.js"></script><script async="" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/gtm.js"></script><script>!function(e,t,a,n,g){e[n]=e[n]||[],e[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var m=t.getElementsByTagName(a)[0],r=t.createElement(a);r.async=!0,r.src="https://www.googletagmanager.com/gtm.js?id=GTM-KNTPB4F",m.parentNode.insertBefore(r,m)}(window,document,"script","dataLayer")</script><script src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/utils.htm"></script><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no"><title>DIO | Codifique o seu futuro global agora</title><link rel="manifest" href="https://web.dio.me/manifest.json"><link rel="apple-touch-icon" sizes="180x180" href="https://web.dio.me/favicon/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="https://web.dio.me/favicon/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="https://web.dio.me/favicon/favicon-16x16.png"><link rel="icon" type="ico" href="https://web.dio.me/favicon/favicon.ico"><style>@font-face{font-family:AntDesign;font-style:normal;font-weight:400;src:url(/assets/fonts/AntDesign.ttf) format("truetype")}@font-face{font-family:Entypo;font-style:normal;font-weight:400;src:url(/assets/fonts/Entypo.ttf) format("truetype")}@font-face{font-family:EvilIcons;font-style:normal;font-weight:400;src:url(/assets/fonts/EvilIcons.ttf) format("truetype")}@font-face{font-family:Feather;font-style:normal;font-weight:400;src:url(/assets/fonts/Feather.ttf) format("truetype")}@font-face{font-family:FontAwesome;font-style:normal;font-weight:400;src:url(/assets/fonts/FontAwesome.ttf) format("truetype")}@font-face{font-family:FontAwesome5;font-style:normal;font-weight:400;src:url(/assets/fonts/FontAwesome5.ttf) format("truetype")}@font-face{font-family:FontAwesome5Brands;font-style:normal;font-weight:400;src:url(/assets/fonts/FontAwesome5_Brands.ttf) format("truetype")}@font-face{font-family:Foundation;font-style:normal;font-weight:400;src:url(/assets/fonts/Foundation.ttf) format("truetype")}@font-face{font-family:Ionicons;font-style:normal;font-weight:400;src:url(/assets/fonts/Ionicons.ttf) format("truetype")}@font-face{font-family:MaterialCommunityIcons;font-style:normal;font-weight:400;src:url(/assets/fonts/MaterialCommunityIcons.ttf) format("truetype")}@font-face{font-family:MaterialIcons;font-style:normal;font-weight:400;src:url(/assets/fonts/MaterialIcons.ttf) format("truetype")}@font-face{font-family:Octicons;font-style:normal;font-weight:400;src:url(/assets/fonts/Octicons.ttf) format("truetype")}@font-face{font-family:SimpleLineIcons;font-style:normal;font-weight:400;src:url(/assets/fonts/SimpleLineIcons.ttf) format("truetype")}@font-face{font-family:Zocial;font-style:normal;font-weight:400;src:url(/assets/fonts/Zocial.ttf) format("truetype")}</style><link href="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/2.css" rel="stylesheet"><link href="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/main.css" rel="stylesheet"><script type="text/javascript" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/jquery.js"></script><script type="text/javascript" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/easyXDM.js"></script><script async="" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/hotjar-1255605.js"></script><style type="text/css"></style><style data-styled="" data-styled-version="4.3.2"></style><style type="text/css">.container[data-container] {
  position: absolute;
  background-color: black;
  height: 100%;
  width: 100%;
  max-width: 100%; }
  .container[data-container] .chromeless {
    cursor: default; }

[data-player]:not(.nocursor) .container[data-container]:not(.chromeless).pointer-enabled {
  cursor: pointer; }
[data-player] {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
  position: relative;
  margin: 0;
  padding: 0;
  border: 0;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  overflow: hidden;
  font-size: 100%;
  font-family: "Roboto", "Open Sans", Arial, sans-serif;
  text-shadow: 0 0 0;
  box-sizing: border-box; }
  [data-player] div, [data-player] span, [data-player] applet, [data-player] object, [data-player] iframe,
  [data-player] h1, [data-player] h2, [data-player] h3, [data-player] h4, [data-player] h5, [data-player] h6, [data-player] p, [data-player] blockquote, [data-player] pre,
  [data-player] a, [data-player] abbr, [data-player] acronym, [data-player] address, [data-player] big, [data-player] cite, [data-player] code,
  [data-player] del, [data-player] dfn, [data-player] em, [data-player] img, [data-player] ins, [data-player] kbd, [data-player] q, [data-player] s, [data-player] samp,
  [data-player] small, [data-player] strike, [data-player] strong, [data-player] sub, [data-player] sup, [data-player] tt, [data-player] var,
  [data-player] b, [data-player] u, [data-player] i, [data-player] center,
  [data-player] dl, [data-player] dt, [data-player] dd, [data-player] ol, [data-player] ul, [data-player] li,
  [data-player] fieldset, [data-player] form, [data-player] label, [data-player] legend,
  [data-player] table, [data-player] caption, [data-player] tbody, [data-player] tfoot, [data-player] thead, [data-player] tr, [data-player] th, [data-player] td,
  [data-player] article, [data-player] aside, [data-player] canvas, [data-player] details, [data-player] embed,
  [data-player] figure, [data-player] figcaption, [data-player] footer, [data-player] header, [data-player] hgroup,
  [data-player] menu, [data-player] nav, [data-player] output, [data-player] ruby, [data-player] section, [data-player] summary,
  [data-player] time, [data-player] mark, [data-player] audio, [data-player] video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline; }
  [data-player] table {
    border-collapse: collapse;
    border-spacing: 0; }
  [data-player] caption, [data-player] th, [data-player] td {
    text-align: left;
    font-weight: normal;
    vertical-align: middle; }
  [data-player] q, [data-player] blockquote {
    quotes: none; }
    [data-player] q:before, [data-player] q:after, [data-player] blockquote:before, [data-player] blockquote:after {
      content: "";
      content: none; }
  [data-player] a img {
    border: none; }
  [data-player]:focus {
    outline: 0; }
  [data-player] * {
    max-width: none;
    box-sizing: inherit;
    float: none; }
  [data-player] div {
    display: block; }
  [data-player].fullscreen {
    width: 100% !important;
    height: 100% !important;
    top: 0;
    left: 0; }
  [data-player].nocursor {
    cursor: none; }

.clappr-style {
  display: none !important; }
[data-html5-video] {
  position: absolute;
  height: 100%;
  width: 100%;
  display: block; }
.clappr-flash-playback[data-flash-playback] {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  pointer-events: none; }
[data-html-img] {
  max-width: 100%;
  max-height: 100%; }
[data-no-op] {
  position: absolute;
  height: 100%;
  width: 100%;
  text-align: center; }

[data-no-op] p[data-no-op-msg] {
  position: absolute;
  text-align: center;
  font-size: 25px;
  left: 0;
  right: 0;
  color: white;
  padding: 10px;
  /* center vertically */
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  max-height: 100%;
  overflow: auto; }

[data-no-op] canvas[data-no-op-canvas] {
  background-color: #777;
  height: 100%;
  width: 100%; }
.spinner-three-bounce[data-spinner] {
  position: absolute;
  margin: 0 auto;
  width: 70px;
  text-align: center;
  z-index: 999;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  /* center vertically */
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%); }
  .spinner-three-bounce[data-spinner] > div {
    width: 18px;
    height: 18px;
    background-color: #FFFFFF;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
            animation: bouncedelay 1.4s infinite ease-in-out;
    /* Prevent first frame from flickering when animation starts */
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both; }
  .spinner-three-bounce[data-spinner] [data-bounce1] {
    -webkit-animation-delay: -0.32s;
            animation-delay: -0.32s; }
  .spinner-three-bounce[data-spinner] [data-bounce2] {
    -webkit-animation-delay: -0.16s;
            animation-delay: -0.16s; }

@-webkit-keyframes bouncedelay {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
            transform: scale(0); }
  40% {
    -webkit-transform: scale(1);
            transform: scale(1); } }

@keyframes bouncedelay {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
            transform: scale(0); }
  40% {
    -webkit-transform: scale(1);
            transform: scale(1); } }
.clappr-watermark[data-watermark] {
  position: absolute;
  min-width: 70px;
  max-width: 200px;
  width: 12%;
  text-align: center;
  z-index: 10; }

.clappr-watermark[data-watermark] a {
  outline: none;
  cursor: pointer; }

.clappr-watermark[data-watermark] img {
  max-width: 100%; }

.clappr-watermark[data-watermark-bottom-left] {
  bottom: 10px;
  left: 10px; }

.clappr-watermark[data-watermark-bottom-right] {
  bottom: 10px;
  right: 42px; }

.clappr-watermark[data-watermark-top-left] {
  top: 10px;
  left: 10px; }

.clappr-watermark[data-watermark-top-right] {
  top: 10px;
  right: 37px; }
.player-poster[data-poster] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 998;
  top: 0;
  left: 0;
  background-color: #000;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%; }
  .player-poster[data-poster].clickable {
    cursor: pointer; }
  .player-poster[data-poster]:hover .play-wrapper[data-poster] {
    opacity: 1; }
  .player-poster[data-poster] .play-wrapper[data-poster] {
    width: 100%;
    height: 25%;
    margin: 0 auto;
    opacity: 0.75;
    transition: opacity 0.1s ease; }
    .player-poster[data-poster] .play-wrapper[data-poster] svg {
      height: 100%; }
      .player-poster[data-poster] .play-wrapper[data-poster] svg path {
        fill: #fff; }
.media-control-notransition {
  transition: none !important; }

.media-control[data-media-control] {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 9999;
  pointer-events: none; }
  .media-control[data-media-control].dragging {
    pointer-events: auto;
    cursor: -webkit-grabbing !important;
    cursor: grabbing !important;
    cursor: url(<%=baseUrl%>/a8c874b93b3d848f39a71260c57e3863.cur), move; }
    .media-control[data-media-control].dragging * {
      cursor: -webkit-grabbing !important;
      cursor: grabbing !important;
      cursor: url(<%=baseUrl%>/a8c874b93b3d848f39a71260c57e3863.cur), move; }
  .media-control[data-media-control] .media-control-background[data-background] {
    position: absolute;
    height: 40%;
    width: 100%;
    bottom: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
    transition: opacity 0.6s ease-out; }
  .media-control[data-media-control] .media-control-icon {
    line-height: 0;
    letter-spacing: 0;
    speak: none;
    color: #fff;
    opacity: 0.5;
    vertical-align: middle;
    text-align: left;
    transition: all 0.1s ease; }
  .media-control[data-media-control] .media-control-icon:hover {
    color: white;
    opacity: 0.75;
    text-shadow: rgba(255, 255, 255, 0.8) 0 0 5px; }
  .media-control[data-media-control].media-control-hide .media-control-background[data-background] {
    opacity: 0; }
  .media-control[data-media-control].media-control-hide .media-control-layer[data-controls] {
    bottom: -50px; }
    .media-control[data-media-control].media-control-hide .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-scrubber[data-seekbar] {
      opacity: 0; }
  .media-control[data-media-control] .media-control-layer[data-controls] {
    position: absolute;
    bottom: 7px;
    width: 100%;
    height: 32px;
    font-size: 0;
    vertical-align: middle;
    pointer-events: auto;
    transition: bottom 0.4s ease-out; }
    .media-control[data-media-control] .media-control-layer[data-controls] .media-control-left-panel[data-media-control] {
      position: absolute;
      top: 0;
      left: 4px;
      height: 100%; }
    .media-control[data-media-control] .media-control-layer[data-controls] .media-control-center-panel[data-media-control] {
      height: 100%;
      text-align: center;
      line-height: 32px; }
    .media-control[data-media-control] .media-control-layer[data-controls] .media-control-right-panel[data-media-control] {
      position: absolute;
      top: 0;
      right: 4px;
      height: 100%; }
    .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button {
      background-color: transparent;
      border: 0;
      margin: 0 6px;
      padding: 0;
      cursor: pointer;
      display: inline-block;
      width: 32px;
      height: 100%; }
      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button svg {
        width: 100%;
        height: 22px; }
        .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button svg path {
          fill: white; }
      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button:focus {
        outline: none; }
      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-play] {
        float: left;
        height: 100%; }
      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-pause] {
        float: left;
        height: 100%; }
      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-stop] {
        float: left;
        height: 100%; }
      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-fullscreen] {
        float: right;
        background-color: transparent;
        border: 0;
        height: 100%; }
      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-hd-indicator] {
        background-color: transparent;
        border: 0;
        cursor: default;
        display: none;
        float: right;
        height: 100%; }
        .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-hd-indicator].enabled {
          display: block;
          opacity: 1.0; }
          .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-hd-indicator].enabled:hover {
            opacity: 1.0;
            text-shadow: none; }
      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-playpause] {
        float: left; }
      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-playstop] {
        float: left; }
    .media-control[data-media-control] .media-control-layer[data-controls] .media-control-indicator[data-position], .media-control[data-media-control] .media-control-layer[data-controls] .media-control-indicator[data-duration] {
      display: inline-block;
      font-size: 10px;
      color: white;
      cursor: default;
      line-height: 32px;
      position: relative; }
    .media-control[data-media-control] .media-control-layer[data-controls] .media-control-indicator[data-position] {
      margin: 0 6px 0 7px; }
    .media-control[data-media-control] .media-control-layer[data-controls] .media-control-indicator[data-duration] {
      color: rgba(255, 255, 255, 0.5);
      margin-right: 6px; }
      .media-control[data-media-control] .media-control-layer[data-controls] .media-control-indicator[data-duration]:before {
        content: "|";
        margin-right: 7px; }
    .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] {
      position: absolute;
      top: -20px;
      left: 0;
      display: inline-block;
      vertical-align: middle;
      width: 100%;
      height: 25px;
      cursor: pointer; }
      .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] {
        width: 100%;
        height: 1px;
        position: relative;
        top: 12px;
        background-color: #666666; }
        .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-fill-1[data-seekbar] {
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background-color: #c2c2c2;
          transition: all 0.1s ease-out; }
        .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-fill-2[data-seekbar] {
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background-color: #005aff;
          transition: all 0.1s ease-out; }
        .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-hover[data-seekbar] {
          opacity: 0;
          position: absolute;
          top: -3px;
          width: 5px;
          height: 7px;
          background-color: rgba(255, 255, 255, 0.5);
          transition: opacity 0.1s ease; }
      .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar]:hover .bar-background[data-seekbar] .bar-hover[data-seekbar] {
        opacity: 1; }
      .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar].seek-disabled {
        cursor: default; }
        .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar].seek-disabled:hover .bar-background[data-seekbar] .bar-hover[data-seekbar] {
          opacity: 0; }
      .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-scrubber[data-seekbar] {
        position: absolute;
        -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
        top: 2px;
        left: 0;
        width: 20px;
        height: 20px;
        opacity: 1;
        transition: all 0.1s ease-out; }
        .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-scrubber[data-seekbar] .bar-scrubber-icon[data-seekbar] {
          position: absolute;
          left: 6px;
          top: 6px;
          width: 8px;
          height: 8px;
          border-radius: 10px;
          box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.2);
          background-color: white; }
    .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] {
      float: right;
      display: inline-block;
      height: 32px;
      cursor: pointer;
      margin: 0 6px;
      box-sizing: border-box; }
      .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume] {
        float: left;
        bottom: 0; }
        .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume] .drawer-icon[data-volume] {
          background-color: transparent;
          border: 0;
          box-sizing: content-box;
          width: 32px;
          height: 32px;
          opacity: 0.5; }
          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume] .drawer-icon[data-volume]:hover {
            opacity: 0.75; }
          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume] .drawer-icon[data-volume] svg {
            height: 24px;
            position: relative;
            top: 3px; }
            .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume] .drawer-icon[data-volume] svg path {
              fill: white; }
          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume] .drawer-icon[data-volume].muted svg {
            margin-left: 2px; }
      .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] {
        float: left;
        position: relative;
        overflow: hidden;
        top: 6px;
        width: 42px;
        height: 18px;
        padding: 3px 0;
        transition: width .2s ease-out; }
        .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-background[data-volume] {
          height: 1px;
          position: relative;
          top: 7px;
          margin: 0 3px;
          background-color: #666666; }
          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-background[data-volume] .bar-fill-1[data-volume] {
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            background-color: #c2c2c2;
            transition: all 0.1s ease-out; }
          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-background[data-volume] .bar-fill-2[data-volume] {
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            background-color: #005aff;
            transition: all 0.1s ease-out; }
          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-background[data-volume] .bar-hover[data-volume] {
            opacity: 0;
            position: absolute;
            top: -3px;
            width: 5px;
            height: 7px;
            background-color: rgba(255, 255, 255, 0.5);
            transition: opacity 0.1s ease; }
        .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-scrubber[data-volume] {
          position: absolute;
          -webkit-transform: translateX(-50%);
                  transform: translateX(-50%);
          top: 0px;
          left: 0;
          width: 20px;
          height: 20px;
          opacity: 1;
          transition: all 0.1s ease-out; }
          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-scrubber[data-volume] .bar-scrubber-icon[data-volume] {
            position: absolute;
            left: 6px;
            top: 6px;
            width: 8px;
            height: 8px;
            border-radius: 10px;
            box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.2);
            background-color: white; }
        .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .segmented-bar-element[data-volume] {
          float: left;
          width: 4px;
          padding-left: 2px;
          height: 12px;
          opacity: 0.5;
          box-shadow: inset 2px 0 0 white;
          transition: -webkit-transform .2s ease-out;
          transition: transform .2s ease-out;
          transition: transform .2s ease-out, -webkit-transform .2s ease-out; }
          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .segmented-bar-element[data-volume].fill {
            box-shadow: inset 2px 0 0 #fff;
            opacity: 1; }
          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .segmented-bar-element[data-volume]:nth-of-type(1) {
            padding-left: 0; }
          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .segmented-bar-element[data-volume]:hover {
            -webkit-transform: scaleY(1.5);
                    transform: scaleY(1.5); }
  .media-control[data-media-control].w320 .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume].volume-bar-hide {
    width: 0;
    height: 12px;
    top: 9px;
    padding: 0; }
.dvr-controls[data-dvr-controls] {
  display: inline-block;
  float: left;
  color: #fff;
  line-height: 32px;
  font-size: 10px;
  font-weight: bold;
  margin-left: 6px; }
  .dvr-controls[data-dvr-controls] .live-info {
    cursor: default;
    font-family: "Roboto", "Open Sans", Arial, sans-serif;
    text-transform: uppercase; }
    .dvr-controls[data-dvr-controls] .live-info:before {
      content: "";
      display: inline-block;
      position: relative;
      width: 7px;
      height: 7px;
      border-radius: 3.5px;
      margin-right: 3.5px;
      background-color: #ff0101; }
    .dvr-controls[data-dvr-controls] .live-info.disabled {
      opacity: 0.3; }
      .dvr-controls[data-dvr-controls] .live-info.disabled:before {
        background-color: #fff; }
  .dvr-controls[data-dvr-controls] .live-button {
    cursor: pointer;
    outline: none;
    display: none;
    border: 0;
    color: #fff;
    background-color: transparent;
    height: 32px;
    padding: 0;
    opacity: 0.7;
    font-family: "Roboto", "Open Sans", Arial, sans-serif;
    text-transform: uppercase;
    transition: all 0.1s ease; }
    .dvr-controls[data-dvr-controls] .live-button:before {
      content: "";
      display: inline-block;
      position: relative;
      width: 7px;
      height: 7px;
      border-radius: 3.5px;
      margin-right: 3.5px;
      background-color: #fff; }
    .dvr-controls[data-dvr-controls] .live-button:hover {
      opacity: 1;
      text-shadow: rgba(255, 255, 255, 0.75) 0 0 5px; }

.dvr .dvr-controls[data-dvr-controls] .live-info {
  display: none; }

.dvr .dvr-controls[data-dvr-controls] .live-button {
  display: block; }

.dvr.media-control.live[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-fill-2[data-seekbar] {
  background-color: #005aff; }

.media-control.live[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-fill-2[data-seekbar] {
  background-color: #ff0101; }
.cc-controls[data-cc-controls] {
  float: right;
  position: relative;
  display: none; }
  .cc-controls[data-cc-controls].available {
    display: block; }
  .cc-controls[data-cc-controls] .cc-button {
    padding: 6px !important; }
    .cc-controls[data-cc-controls] .cc-button.enabled {
      display: block;
      opacity: 1.0; }
      .cc-controls[data-cc-controls] .cc-button.enabled:hover {
        opacity: 1.0;
        text-shadow: none; }
  .cc-controls[data-cc-controls] > ul {
    list-style-type: none;
    position: absolute;
    bottom: 25px;
    border: 1px solid black;
    display: none;
    background-color: #e6e6e6; }
  .cc-controls[data-cc-controls] li {
    font-size: 10px; }
    .cc-controls[data-cc-controls] li[data-title] {
      background-color: #c3c2c2;
      padding: 5px; }
    .cc-controls[data-cc-controls] li a {
      color: #444;
      padding: 2px 10px;
      display: block;
      text-decoration: none; }
      .cc-controls[data-cc-controls] li a:hover {
        background-color: #555;
        color: white; }
        .cc-controls[data-cc-controls] li a:hover a {
          color: white;
          text-decoration: none; }
    .cc-controls[data-cc-controls] li.current a {
      color: #f00; }
.seek-time[data-seek-time] {
  position: absolute;
  white-space: nowrap;
  height: 20px;
  line-height: 20px;
  font-size: 0;
  left: -100%;
  bottom: 55px;
  background-color: rgba(2, 2, 2, 0.5);
  z-index: 9999;
  transition: opacity 0.1s ease; }
  .seek-time[data-seek-time].hidden[data-seek-time] {
    opacity: 0; }
  .seek-time[data-seek-time] [data-seek-time] {
    display: inline-block;
    color: white;
    font-size: 10px;
    padding-left: 7px;
    padding-right: 7px;
    vertical-align: top; }
  .seek-time[data-seek-time] [data-duration] {
    display: inline-block;
    color: rgba(255, 255, 255, 0.5);
    font-size: 10px;
    padding-right: 7px;
    vertical-align: top; }
    .seek-time[data-seek-time] [data-duration]:before {
      content: "|";
      margin-right: 7px; }
div.player-error-screen {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #CCCACA;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center; }
  div.player-error-screen__content[data-error-screen] {
    font-size: 14px;
    color: #CCCACA;
    margin-top: 45px; }
  div.player-error-screen__title[data-error-screen] {
    font-weight: bold;
    line-height: 30px;
    font-size: 18px; }
  div.player-error-screen__message[data-error-screen] {
    width: 90%;
    margin: 0 auto; }
  div.player-error-screen__code[data-error-screen] {
    font-size: 13px;
    margin-top: 15px; }
  div.player-error-screen__reload {
    cursor: pointer;
    width: 30px;
    margin: 15px auto 0; }
</style><style type="text/css">.level_selector[data-level-selector] {
  float: right;
  position: relative;
  height: 100%; }
  .level_selector[data-level-selector] button {
    background-color: transparent;
    color: #fff;
    font-family: Roboto,"Open Sans",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    border: none;
    font-size: 12px;
    height: 100%; }
    .level_selector[data-level-selector] button:hover {
      color: #c9c9c9; }
    .level_selector[data-level-selector] button.changing {
      -webkit-animation: pulse 0.5s infinite alternate; }
  .level_selector[data-level-selector] > ul {
    list-style-type: none;
    position: absolute;
    bottom: 100%;
    display: none;
    background-color: rgba(28, 28, 28, 0.9);
    white-space: nowrap; }
  .level_selector[data-level-selector] li {
    font-size: 12px;
    color: #eee; }
    .level_selector[data-level-selector] li[data-title] {
      background-color: #333;
      padding: 8px 25px; }
    .level_selector[data-level-selector] li a {
      color: #eee;
      padding: 5px 10px;
      display: block;
      text-decoration: none; }
      .level_selector[data-level-selector] li a:hover {
        background-color: rgba(255, 255, 255, 0.1);
        color: #fff; }
        .level_selector[data-level-selector] li a:hover a {
          color: #fff;
          text-decoration: none; }
    .level_selector[data-level-selector] li.current a {
      color: #2ecc71; }
</style><style type="text/css">._3vt7_Mh4hRCFbp__dFqBCI {
  position: relative;
  text-align: left;
  width: 100%;
}
._1g3J-bKd9rjyM8leQ8BRL8 {
  pointer-events: none;
  opacity: 0.5;
}
._2iA8p44d0WZ-WqRBGcAuEV {
  border: 1px solid #cccccc;
  border-radius: 4px;
  padding: 5px;
  min-height: 22px;
  position: relative;
}
._3vt7_Mh4hRCFbp__dFqBCI input {
  border: none;
  margin-top: 3px;
  background: transparent;
}
._3vt7_Mh4hRCFbp__dFqBCI input:focus {
  outline: none;
}
._7ahQImyV4dj0EpcNOjnwA {
  padding: 4px 10px;
  background: #0096fb;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  font-size: 13px;
  color: #fff;
  white-space: nowrap;
}
._32r8xHW3WLH5mygPuyDIBF {
  background: none;
  border-radius: none;
  color: inherit;
  white-space: nowrap;
}
._32r8xHW3WLH5mygPuyDIBF i {
  display: none;
}
._3crOX-etLxsZ8OgjhYCvt7 {
  font-size: 12px;
  float: right;
  margin-left: 2px;
  cursor: pointer;
}
._3vLmCG3bB3CM2hhAiQX1tN {
  position: absolute;
  width: 100%;
  background: #fff;
  border-radius: 4px;
  margin-top: 1px;
  z-index: 2;
}
._3vt7_Mh4hRCFbp__dFqBCI ul {
  display: block;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-height: 250px;
  overflow-y: auto;
}
._3vt7_Mh4hRCFbp__dFqBCI li {
  padding: 10px 10px;
}
._3vt7_Mh4hRCFbp__dFqBCI li:hover {
  background: #0096fb;
  color: #fff;
  cursor: pointer;
}
._3fD5brWjGxPOXWAlZj16mH {
  margin-right: 10px;
}
._2umh-Sfy0e2Vs0gU_yOiBY {
  pointer-events: none;
  opacity: 0.5;
}
.lhyQmCtWOINviMz0WG_gr {
  background: #0096fb;
  color: #ffffff;
}
._1YkOwrSkIvJIAvNNRNP3P5 {
  display: block;
}
.Dv7FLAST-3bZceA5TIxEN {
  display: none;
}
._1e56tWp4cEJMn-cD-PZArd {
  padding: 10px;
  display: block;
}
._2hO6ncpWlUNK05lxQ9_UtY {
  padding-right: 20px;
}
li._3N0WR2P3JAHZIXKMgKZeiH {
  color: #908e8e;
  pointer-events: none;
  padding: 5px 15px;
}
li._1qPfmP7Js2zG_IF5R0J3Un {
  padding-left: 30px;
}
._3VhVi3lFI1vobEEti0dqNg:before {
  content: "\e800";
}
._3-r0hdDFugdlrKMhKLUXvS:before {
  content: "\e801";
}
._1ruIhoPvyfSHg9LQB0CI6p:before {
  content: "\e802";
}
._3H7pQPqP-usrLcjKT8VmLb:before {
  content: "\f2d3";
}
._1cgu0CqbPSvU9G_sHmk1wv {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
}
._1cgu0CqbPSvU9G_sHmk1wv:before { 
  content: '\e803'; 
}
</style><style type="text/css">@font-face {
  font-family: 'fontello';
  src: url(data:application/vnd.ms-fontobject;base64,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);
  src: url(data:application/vnd.ms-fontobject;base64,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#iefix) format('embedded-opentype'),
       url(data:font/woff2;base64,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) format('woff2'),
       url(data:font/woff;base64,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) format('woff'),
       url(data:font/ttf;base64,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) format('truetype'),
       url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxtZXRhZGF0YT5Db3B5cmlnaHQgKEMpIDIwMTkgYnkgb3JpZ2luYWwgYXV0aG9ycyBAIGZvbnRlbGxvLmNvbTwvbWV0YWRhdGE+DQo8ZGVmcz4NCjxmb250IGlkPSJmb250ZWxsbyIgaG9yaXotYWR2LXg9IjEwMDAiID4NCjxmb250LWZhY2UgZm9udC1mYW1pbHk9ImZvbnRlbGxvIiBmb250LXdlaWdodD0iNDAwIiBmb250LXN0cmV0Y2g9Im5vcm1hbCIgdW5pdHMtcGVyLWVtPSIxMDAwIiBhc2NlbnQ9Ijg1MCIgZGVzY2VudD0iLTE1MCIgLz4NCjxtaXNzaW5nLWdseXBoIGhvcml6LWFkdi14PSIxMDAwIiAvPg0KPGdseXBoIGdseXBoLW5hbWU9ImNhbmNlbC1jaXJjbGVkIiB1bmljb2RlPSImI3hlODAwOyIgZD0iTTY0MSAyMjRxMCAxNC0xMCAyNWwtMTAxIDEwMSAxMDEgMTAxcTEwIDExIDEwIDI1IDAgMTUtMTAgMjZsLTUxIDUwcS0xMCAxMS0yNSAxMS0xNSAwLTI1LTExbC0xMDEtMTAxLTEwMSAxMDFxLTExIDExLTI1IDExLTE2IDAtMjYtMTFsLTUwLTUwcS0xMS0xMS0xMS0yNiAwLTE0IDExLTI1bDEwMS0xMDEtMTAxLTEwMXEtMTEtMTEtMTEtMjUgMC0xNSAxMS0yNmw1MC01MHExMC0xMSAyNi0xMSAxNCAwIDI1IDExbDEwMSAxMDEgMTAxLTEwMXExMC0xMSAyNS0xMSAxNSAwIDI1IDExbDUxIDUwcTEwIDExIDEwIDI2eiBtMjE2IDEyNnEwLTExNy01Ny0yMTV0LTE1Ni0xNTYtMjE1LTU4LTIxNiA1OC0xNTUgMTU2LTU4IDIxNSA1OCAyMTUgMTU1IDE1NiAyMTYgNTggMjE1LTU4IDE1Ni0xNTYgNTctMjE1eiIgaG9yaXotYWR2LXg9Ijg1Ny4xIiAvPg0KDQo8Z2x5cGggZ2x5cGgtbmFtZT0iY2FuY2VsIiB1bmljb2RlPSImI3hlODAxOyIgZD0iTTcyNCAxMTJxMC0yMi0xNS0zOGwtNzYtNzZxLTE2LTE1LTM4LTE1dC0zOCAxNWwtMTY0IDE2NS0xNjQtMTY1cS0xNi0xNS0zOC0xNXQtMzggMTVsLTc2IDc2cS0xNiAxNi0xNiAzOHQxNiAzOGwxNjQgMTY0LTE2NCAxNjRxLTE2IDE2LTE2IDM4dDE2IDM4bDc2IDc2cTE2IDE2IDM4IDE2dDM4LTE2bDE2NC0xNjQgMTY0IDE2NHExNiAxNiAzOCAxNnQzOC0xNmw3Ni03NnExNS0xNSAxNS0zOHQtMTUtMzhsLTE2NC0xNjQgMTY0LTE2NHExNS0xNSAxNS0zOHoiIGhvcml6LWFkdi14PSI3ODUuNyIgLz4NCg0KPGdseXBoIGdseXBoLW5hbWU9ImNhbmNlbC1jaXJjbGVkMiIgdW5pY29kZT0iJiN4ZTgwMjsiIGQ9Ik02MTIgMjQ4bC04MS04MnEtNi01LTEzLTV0LTEzIDVsLTc2IDc3LTc3LTc3cS01LTUtMTMtNXQtMTIgNWwtODIgODJxLTYgNi02IDEzdDYgMTNsNzYgNzYtNzYgNzdxLTYgNS02IDEydDYgMTNsODIgODJxNSA1IDEyIDV0MTMtNWw3Ny03NyA3NiA3N3E2IDUgMTMgNXQxMy01bDgxLTgycTYtNSA2LTEzdC02LTEybC03Ni03NyA3Ni03NnE2LTYgNi0xM3QtNi0xM3ogbTEyMCAxMDJxMCA4My00MSAxNTJ0LTExMCAxMTEtMTUyIDQxLTE1My00MS0xMTAtMTExLTQxLTE1MiA0MS0xNTIgMTEwLTExMSAxNTMtNDEgMTUyIDQxIDExMCAxMTEgNDEgMTUyeiBtMTI1IDBxMC0xMTctNTctMjE1dC0xNTYtMTU2LTIxNS01OC0yMTYgNTgtMTU1IDE1Ni01OCAyMTUgNTggMjE1IDE1NSAxNTYgMjE2IDU4IDIxNS01OCAxNTYtMTU2IDU3LTIxNXoiIGhvcml6LWFkdi14PSI4NTcuMSIgLz4NCg0KPGdseXBoIGdseXBoLW5hbWU9ImRvd24tZGlyIiB1bmljb2RlPSImI3hlODAzOyIgZD0iTTU3MSA0NTdxMC0xNC0xMC0yNWwtMjUwLTI1MHEtMTEtMTEtMjUtMTF0LTI1IDExbC0yNTAgMjUwcS0xMSAxMS0xMSAyNXQxMSAyNSAyNSAxMWg1MDBxMTQgMCAyNS0xMXQxMC0yNXoiIGhvcml6LWFkdi14PSI1NzEuNCIgLz4NCg0KPGdseXBoIGdseXBoLW5hbWU9IndpbmRvdy1jbG9zZSIgdW5pY29kZT0iJiN4ZjJkMzsiIGQ9Ik02NTYgMTEzbDgxIDgxcTYgNiA2IDEzdC02IDEzbC0xMzAgMTMwIDEzMCAxMzBxNiA2IDYgMTN0LTYgMTNsLTgxIDgxcS02IDYtMTMgNnQtMTMtNmwtMTMwLTEzMC0xMzAgMTMwcS02IDYtMTMgNnQtMTMtNmwtODEtODFxLTYtNi02LTEzdDYtMTNsMTMwLTEzMC0xMzAtMTMwcS02LTYtNi0xM3Q2LTEzbDgxLTgxcTYtNiAxMy02dDEzIDZsMTMwIDEzMCAxMzAtMTMwcTYtNiAxMy02dDEzIDZ6IG0zNDQgNTc2di02NzhxMC0zNy0yNi02M3QtNjMtMjdoLTgyMnEtMzYgMC02MyAyN3QtMjYgNjN2Njc4cTAgMzcgMjYgNjN0NjMgMjdoODIycTM3IDAgNjMtMjd0MjYtNjN6IiBob3Jpei1hZHYteD0iMTAwMCIgLz4NCjwvZm9udD4NCjwvZGVmcz4NCjwvc3ZnPg==#fontello) format('svg');
  font-weight: normal;
  font-style: normal;
}
/* Chrome hack: SVG is rendered more smooth in Windozze. 100% magic, uncomment if you need it. */
/* Note, that will break hinting! In other OS-es font will be not as sharp as it could be */
/*
@media screen and (-webkit-min-device-pixel-ratio:0) {
  @font-face {
    font-family: 'fontello';
    src: url('../font/fontello.svg?73464045#fontello') format('svg');
  }
}
*/
 
 [class^="icon_"]:before, [class*=" icon_"]:before {
  font-family: "fontello";
  font-style: normal;
  font-weight: normal;
  speak: none;
 
  display: inline-block;
  text-decoration: inherit;
  width: 1em;
  margin-right: .2em;
  text-align: center;
  /* opacity: .8; */
 
  /* For safety - reset parent styles, that can break glyph codes*/
  font-variant: normal;
  text-transform: none;
 
  /* fix buttons height, for twitter bootstrap */
  line-height: 1em;
 
  /* Animation center compensation - margins should be symmetric */
  /* remove if not needed */
  margin-left: .2em;
 
  /* you can be more comfortable with increased icons size */
  /* font-size: 120%; */
 
  /* Font smoothing. That was taken from TWBS */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  /* Uncomment for 3D effect */
  /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */
}
 
.YDPHwOdUW3bHWFzSN7XbI:before { content: '\e800'; } /* '' */
._2cHYovwh50_sKQwyhMt7q7:before { content: '\e801'; } /* '' */
._1DTIjIm919Url3jvCMrytD:before { content: '\e802'; } /* '' */
._1o1B6-Nxt4wGJGd0Jp12vt:before { content: '\e803'; } /* '' */
._1RisAMYH9IA7sBoYFhBpHI:before { content: '\f2d3'; } /* '' */</style><style type="text/css">.smooth-dnd-container{position:relative;}.smooth-dnd-container *{box-sizing:border-box;}.smooth-dnd-container.horizontal{white-space:nowrap;}.smooth-dnd-container.horizontal > .smooth-dnd-stretcher-element{display:inline-block;}.smooth-dnd-container.horizontal > .smooth-dnd-draggable-wrapper{height:100%;display:inline-block;vertical-align:top;white-space:normal;}.smooth-dnd-container.vertical > .smooth-dnd-draggable-wrapper{overflow:hidden;display:block;}.smooth-dnd-draggable-wrapper{}.smooth-dnd-draggable-wrapper.horizontal{height:100%;display:inline-block;vertical-align:top;white-space:normal;}.smooth-dnd-draggable-wrapper.vertical{overflow:hidden;display:block;}.smooth-dnd-draggable-wrapper.animated{transition:transform ease;}.smooth-dnd-ghost *{box-sizing:border-box;}.smooth-dnd-ghost.animated{transition:all ease-in-out;}.smooth-dnd-disable-touch-action *{touch-actions:none;-ms-touch-actions:none;}.smooth-dnd-no-user-select *{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}</style><script charset="utf-8" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/3.js"></script><script charset="utf-8" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/identify.js"></script><script src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/a_002"></script><script type="text/javascript" charset="utf-8" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/a_003" async=""></script><script type="text/javascript" charset="utf-8" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/t_prism_sitemessages.php" async=""></script><script async="" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/modules.js" charset="utf-8"></script><style type="text/css">iframe#_hjRemoteVarsFrame {display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;}</style><meta http-equiv="origin-trial" content="AxujKG9INjsZ8/gUq8+dTruNvk7RjZQ1oFhhgQbcTJKDnZfbzSTE81wvC2Hzaf3TW4avA76LTZEMdiedF1vIbA4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0="><meta http-equiv="origin-trial" content="Azuce85ORtSnWe1MZDTv68qpaW3iHyfL9YbLRy0cwcCZwVnePnOmkUJlG8HGikmOwhZU22dElCcfrfX2HhrBPAkAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"><meta http-equiv="origin-trial" content="A16nvcdeoOAqrJcmjLRpl1I6f3McDD8EfofAYTt/P/H4/AWwB99nxiPp6kA0fXoiZav908Z8etuL16laFPUdfQsAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"><meta http-equiv="origin-trial" content="AxBHdr0J44vFBQtZUqX9sjiqf5yWZ/OcHRcRMN3H9TH+t90V/j3ENW6C8+igBZFXMJ7G3Pr8Dd13632aLng42wgAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"><meta http-equiv="origin-trial" content="A88BWHFjcawUfKU3lIejLoryXoyjooBXLgWmGh+hNcqMK44cugvsI5YZbNarYvi3roc1fYbHA1AVbhAtuHZflgEAAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjUyNzc0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="><meta http-equiv="origin-trial" content="A8FHS1NmdCwGqD9DwOicnHHY+y27kdWfxKa0YHSGDfv0CSpDKRHTQdQmZVPDUdaFWUsxdgVxlwAd6o+dhJykPA0AAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9"><meta http-equiv="origin-trial" content="A8zdXi6dr1hwXEUjQrYiyYQGlU3557y5QWDnN0Lwgj9ePt66XMEvNkVWOEOWPd7TP9sBQ25X0Q15Lr1Nn4oGFQkAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9"><meta http-equiv="origin-trial" content="A4/Htern2udN9w3yJK9QgWQxQFruxOXsXL7cW60DyCl0EZFGCSme/J33Q/WzF7bBkVvhEWDlcBiUyZaim5CpFQwAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9"><script src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/mode-mode.htm"></script><style data-emotion="css"></style><script src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/javascript.htm"></script><style class="clappr-style">@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  src: local("Roboto"), local("Roboto-Regular"), url(https://web.dio.me/static/js/38861cba61c66739c1452c3a71e39852.ttf) format("truetype");
}
</style></head><body onload="onLoadPage()" class="s" style="overflow: unset;"><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KNTPB4F" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><noscript>You need to enable JavaScript to run this app.</noscript><div id="root"><div id="container" class="mw-100 container"><div class="row"><div class="px-0 coding-header null col-md-12"><div class="mb-0 fixed-top card"><div class="card-header"><div class="row"><div class="d-flex align-items-center col-md-9"><button class="mr-3 btn btn-link"><i style="font-size: 24px; color: rgb(255, 255, 255); font-family: FontAwesome; font-weight: normal; font-style: normal;"></i></button><div class="row"><div class="col-md-12"><div class="h-auto row"><div class="col-md-12"><h5 class="mb-1">Desafios Iniciais Js - Carrefour Web</h5></div></div><div class="h-auto row"><div class="col-md-12"><h6 class="mb-0">1 / 3 - Teorema da Divisão Euclidiana</h6></div></div></div></div></div><div class="col-md-3"><div class="d-flex align-items-center row"><div class="d-flex justify-content-end pr-3 col-md-8"><div id="hearts-list" class="d-flex align-items-center hearts-list"><i style="font-size: 26px; color: rgb(204, 0, 0); padding: 0px 2px; font-family: MaterialCommunityIcons; font-weight: normal; font-style: normal;"></i><i style="font-size: 26px; color: rgb(204, 0, 0); padding: 0px 2px; font-family: MaterialCommunityIcons; font-weight: normal; font-style: normal;"></i><i style="font-size: 26px; color: rgb(204, 0, 0); padding: 0px 2px; font-family: MaterialCommunityIcons; font-weight: normal; font-style: normal;"></i><i style="font-size: 26px; color: rgb(204, 0, 0); padding: 0px 2px; font-family: MaterialCommunityIcons; font-weight: normal; font-style: normal;"></i><i style="font-size: 26px; color: rgb(204, 0, 0); padding: 0px 2px; font-family: MaterialCommunityIcons; font-weight: normal; font-style: normal;"></i></div></div><div class="d-flex justify-content-end pl-0 col-md-4"><div class="dropdown"><button type="button" aria-haspopup="true" aria-expanded="false" class="btn-block font-weight-bold dropdown-toggle btn btn-secondary">Desafios</button><div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu-right"><h6 tabindex="-1" class="dropdown-header">Selecione</h6><button type="button" disabled="disabled" tabindex="-1" class="font-weight-bold disabled dropdown-item">1 - Teorema da Divisão Euclidiana</button><button type="button" tabindex="0" role="menuitem" class="font-weight-bold dropdown-item">2 - Quadrado e ao Cubo</button><button type="button" tabindex="0" role="menuitem" class="font-weight-bold dropdown-item">3 - Idade em Dias</button></div></div></div></div></div></div></div></div></div></div><div style="height: 90vh;" class="content-body row"><div class="coding-sidebar col-12 col-md-4"><div id="menu-sidebar" class="mb-0 card"><div class="p-0 card-body"><div class="row"><div class="menu-sidebar pr-0 col-md-2"><ul class="h-100 align-content-center px-2 nav flex-column"><li class="my-3 bg-transparent w-100 nav-item"><button type="button" id="popover-description" class="active btn btn-secondary btn-block"><i style="font-size: 24px; color: rgb(255, 255, 255); font-family: FontAwesome; font-weight: normal; font-style: normal;"></i></button></li><li class="my-3 bg-transparent w-100 nav-item"><button type="button" id="popover-instruction" class="btn btn-secondary btn-block"><i style="font-size: 24px; color: rgb(255, 255, 255); font-family: FontAwesome; font-weight: normal; font-style: normal;"></i></button></li><li class="my-3 bg-transparent w-100 nav-item"><button type="button" id="popover-question" class="btn btn-secondary btn-block"><i style="font-size: 24px; color: rgb(255, 255, 255); font-family: FontAwesome; font-weight: normal; font-style: normal;"></i></button></li></ul></div><div class="menu-content mt-3 pr-4 col-md-10"><div class="tab-content text-dark"><div class="tab-pane p-0 active"><div style="overflow-y: scroll;"><div class="font-weight-bold row"><div class="col-md-5"><i style="font-size: 15px; color: rgb(250, 150, 42); font-family: MaterialCommunityIcons; font-weight: normal; font-style: normal;"></i> Básico</div><div class="col-md-7"><i style="font-size: 13px; color: rgb(250, 150, 42); font-family: MaterialCommunityIcons; font-weight: normal; font-style: normal;"></i> Princípios Básicos</div></div><hr><div><div>
<h2>Desafio</h2>

<p>Você recebeu desafio de desenvolver&nbsp;um programa que calcule o 
quociente e o resto da divisão de dois números inteiros. Não se 
esqueça&nbsp;que o quociente e o resto da divisão de um inteiro <strong>a</strong> por um inteiro não-nulo <strong>b</strong> são respectivamente os únicos inteiros <strong>q</strong> e <strong>r</strong> tais que:</p>

<p>0 ≤ <strong>r</strong> &lt; |<strong>b</strong>|</p>

<p>Se r &lt; 0:<strong>&nbsp;r = r - </strong>|<strong>b</strong>|</p>

<p><strong>a</strong> = <strong>b</strong> × <strong>q</strong> + <strong>r</strong></p>

<p><strong>q = ( a - r ) / b</strong></p>

<p>Caso você não saiba, o teorema que garante a existência e a unicidade dos inteiros <strong>q</strong> e <strong>r</strong> é conhecido como ‘Teorema da Divisão Euclidiana’ ou ‘Algoritmo da Divisão’.<br>
<br>
**&nbsp;&nbsp;|<strong>b</strong>|<strong> (Módulo / Valor absoluto):&nbsp;</strong>É o valor representado de forma positiva;</p>
</div>

<h2>Entrada</h2>

<div>
<p>A entrada é composta por dois números inteiros <strong>a</strong> e <strong>b</strong> (-1.000 ≤ <strong>a</strong>, <strong>b</strong> &lt; 1.000).</p>
</div>

<h2>Saída</h2>

<div>
<p>Imprima o quociente <strong>q</strong> seguido pelo resto <strong>r</strong> da divisão de <strong>a</strong> por <strong>b</strong>, considerando as regras apresentadas a cima.</p>
</div>

<div>&nbsp;</div>

<table>
	<thead>
		<tr>
			<td>Exemplos de Entrada</td>
			<td>Exemplos de Saída</td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
			<p>7 3</p>
			</td>
			<td>
			<p>2 1</p>
			</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
	</thead>
	<tbody>
		<tr>
			<td>
			<p>7 -3</p>
			</td>
			<td>
			<p>-2 1</p>
			</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
	</thead>
	<tbody>
		<tr>
			<td>
			<p>-7 -3</p>
			</td>
			<td>
			<p>3 2</p>
			</td>
		</tr>
	</tbody>
</table> <br><br></div></div></div><div class="tab-pane p-0"><div style="overflow-y: scroll;"><div class="mb-3 row"><div class="col-md-12">Todas
 as entradas e saída dos algoritmos são utilizados o STDIN e STDOUT de 
cada linguagem, abaixo tem algumas dicas de como utilizar cada STDIN e 
STDOUT de cada linguagem.</div></div><hr><div class="row"><div class="col-md-12"><p class="mb-1"><strong>JavaScript</strong></p><p>Em JavaScript as funções de STDIN e STDOUT respectivamente são<strong>gets</strong> e <strong>console.log</strong>, a função gets é implementada internamente para auxiliar a entrada dos dados.</p><p class="mb-1"><strong class="mb-1">Exemplo:</strong><pre class="mb-0">let line = gets(); // Retorna a próxima linha de entrada</pre><pre>console.log(line); // Imprime o dado</pre></p></div></div><hr><div class="row"><div class="col-md-12"><p class="mb-1"><strong>Java</strong></p><p>Em Java existe várias formas de implementar o STDIN e STDOUT recomendamos utilizar <strong>BufferedReader</strong> para o STDIN e o <strong>System.out.println</strong> para o STDOUT.</p><p class="mb-1"><strong class="mb-1">Exemplo:</strong><pre class="mb-0">BufferedReader br = new BufferedReader(new InputStreamReader(System.in));</pre><pre class="mb-0">StringTokenizer st = new StringTokenizer(br.readLine()); // Lê a linha de entrada</pre><pre class="mb-0">int a = Integer.parseInt(st.nextToken());</pre><pre>System.out.println(a); // Imprime o dado</pre></p></div></div><hr><div class="row"><div class="col-md-12"><p class="mb-1"><strong>Python</strong></p><p>Em Python existe várias formas de implementar o STDIN e STDOUT recomendamos utilizar <strong>sys.stdin.readline</strong> para o STDIN e o <strong>print</strong> para o STDOUT.</p><p class="mb-1"><strong class="mb-1">Exemplo:</strong><pre class="mb-0">import sys</pre><pre class="mb-0">a = int(sys.stdin.readline()) // Lê a linha de entrada</pre><pre>print(a); // Imprime o dado</pre></p></div></div><hr><div> <br><br></div></div></div><div class="tab-pane p-0 faq"><div style="overflow-y: scroll;"><button type="button" class="font-weight-bold mb-3 btn btn-secondary btn-block">VISUALIZAR TOUR INTERATIVO</button><hr><div class="item-question my-2 card"><div id="toggler-question-0" class="py-2 card-header"><div class="d-flex align-items-center row"><div class="col-md-12"><h6 class="mb-0">Por que devo realizar esse desafio de código?</h6></div></div></div><div toggler="#toggler-question-0" class="collapse"><div class="py-0 card-body"><hr><div class="pb-3 row"><div class="col-md-12">Esse
 desafio de código lhe ajudará a praticar e aplicar os conceitos 
apresentados nas aulas e exercícios. Para ter destaque na carreira de 
desenvolvimento de software é necessário praticar muito com algoritmos e
 projetos reais de mercado. Ambos disponíveis na Digital Innovation One.</div></div></div></div></div><div class="item-question my-2 card"><div id="toggler-question-1" class="py-2 card-header"><div class="d-flex align-items-center row"><div class="col-md-12"><h6 class="mb-0">Como posso tirar dúvidas sobre esse desafio?</h6></div></div></div><div toggler="#toggler-question-1" class="collapse"><div class="py-0 card-body"><hr><div class="pb-3 row"><div class="col-md-12">Para
 tirar dúvidas sobre esse desafio você deve acessar e interagir com os 
desenvolvedores de software da comunidade no Discord (<a href="https://discord.gg/MUdRyVg" target="_blank" rel="noopener noreferrer" class="font-weight-bold text-white">clique aqui para acessar</a>).
 A capacidade de aprendizagem colaborativa é uma das habilidades mais 
reconhecidas pelo mercado uma vez que as tecnologias estão em rápida 
evolução e o trabalho em equipe é uma atividade primordial.</div></div></div></div></div><div class="item-question my-2 card"><div id="toggler-question-2" class="py-2 card-header"><div class="d-flex align-items-center row"><div class="col-md-12"><h6 class="mb-0">O que são os testes?</h6></div></div></div><div toggler="#toggler-question-2" class="collapse"><div class="py-0 card-body"><hr><div class="pb-3 row"><div class="col-md-12">Os testes validam se o código desenvolvido atende todas as condições requeridas na descrição do desafio.</div></div></div></div></div><div class="item-question my-2 card"><div id="toggler-question-3" class="py-2 card-header"><div class="d-flex align-items-center row"><div class="col-md-12"><h6 class="mb-0">O que são testes abertos?</h6></div></div></div><div toggler="#toggler-question-3" class="collapse"><div class="py-0 card-body"><hr><div class="pb-3 row"><div class="col-md-12">Os
 testes abertos são exemplos que podem ser usados para avaliar alguns 
dos requisitos do código desenvolvido. Ao clicar sobre um teste aberto é
 possível verificar os parâmetros de entrada e as saídas esperadas. Para
 executar o teste aberto basta clicar sobre o botão azul “Executar 
Testes”.</div></div></div></div></div><div class="item-question my-2 card"><div id="toggler-question-4" class="py-2 card-header"><div class="d-flex align-items-center row"><div class="col-md-12"><h6 class="mb-0">O que são testes ocultos?</h6></div></div></div><div toggler="#toggler-question-4" class="collapse"><div class="py-0 card-body"><hr><div class="pb-3 row"><div class="col-md-12">Os
 testes ocultos validam se o código desenvolvido atende todos os 
requisitos da solução após você clicar sobre o botão verde “Entregar 
Desafio”.</div></div></div></div></div><div class="item-question my-2 card"><div id="toggler-question-5" class="py-2 card-header"><div class="d-flex align-items-center row"><div class="col-md-12"><h6 class="mb-0">Quantos XP é possível ganhar caso o desafio entregue obtenha sucesso em todos os testes?</h6></div></div></div><div toggler="#toggler-question-5" class="collapse"><div class="py-0 card-body"><hr><div class="pb-3 row"><div class="col-md-12">Ao
 concluir um desafio com sucesso você receberá 60 XP para desafios 
classificados como básico, 90 XP para intermediário e 120 XP para 
avançado.</div></div></div></div></div><div class="item-question my-2 card"><div id="toggler-question-6" class="py-2 card-header"><div class="d-flex align-items-center row"><div class="col-md-12"><h6 class="mb-0">Caso eu entregue o desafio e não não tenha sucesso em um ou mais testes, o que acontece?</h6></div></div></div><div toggler="#toggler-question-6" class="collapse"><div class="py-0 card-body"><hr><div class="pb-3 row"><div class="col-md-12">Para cada código desenvolvido e entregue sem sucesso você perde um heart.</div></div></div></div></div><div class="item-question my-2 card"><div id="toggler-question-7" class="py-2 card-header"><div class="d-flex align-items-center row"><div class="col-md-12"><h6 class="mb-0">O que representam os hearts?</h6></div></div></div><div toggler="#toggler-question-7" class="collapse"><div class="py-0 card-body"><hr><div class="pb-3 row"><div class="col-md-12">Os
 hearts representam a quantidade possível de soluções submetidas 
incorretas disponível para você, sendo no máximo 5. Servem para que haja
 maior atenção e pensamento crítico na entrega das atividades.</div></div></div></div></div><div class="item-question my-2 card"><div id="toggler-question-8" class="py-2 card-header"><div class="d-flex align-items-center row"><div class="col-md-12"><h6 class="mb-0">Em quanto tempo é possível recuperar um heart perdido?</h6></div></div></div><div toggler="#toggler-question-8" class="collapse"><div class="py-0 card-body"><hr><div class="pb-3 row"><div class="col-md-12">Um heart perdido é recuperado em 2 horas para membros FREE e em 6 minutos para membros DIO PRO.</div></div></div></div></div><div class="item-question my-2 card"><div id="toggler-question-9" class="py-2 card-header"><div class="d-flex align-items-center row"><div class="col-md-12"><h6 class="mb-0">Tenho que completar o desafio para concluir o bootcamp?</h6></div></div></div><div toggler="#toggler-question-9" class="collapse"><div class="py-0 card-body"><hr><div class="pb-3 row"><div class="col-md-12">Sim, para completar totalmente o bootcamp é necessário concluir todos os desafios.</div></div></div></div></div></div></div></div></div></div></div></div></div><div class="coding-content col-12 col-md-8"><div class="card"><div class="rounded-0 editor-config pt-2 card-header"><div class="d-flex justify-content-end row"><div class="pl-2 save-zone col-md-9"><button type="button" bsstyle="default" class="font-weight-bold btn-save-code mr-2 btn btn-outline-secondary btn-sm">SALVAR</button> <small>salvo uma hora atrás</small></div><div class="col-md-3"><div class="d-flex flex-row pr-2 row"><div class="pr-0 col-md-10"></div><div class="col-md-1"><div id="settings-sidebar" class="sidenav"><div class="pt-3 px-2 row"><div class="col-md-12"><button class="closebtn btn btn-link">×</button><div class="mb-3 row"><div class="col-md-4">Tema</div><div class="col-md-8"><nav class="p-0 navbar navbar-expand-md navbar-light"><ul class="w-100 navbar-nav"><div class="w-100 btn-group-sm dropdown"><button type="button" aria-haspopup="true" aria-expanded="false" class="nav-link font-weight-bold text-white text-left dropdown-toggle btn btn-outline-light btn-block">Monokai</button><div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu-right"><button type="button" tabindex="0" role="menuitem" class="font-weight-bold dropdown-item">Chrome</button><button type="button" tabindex="0" role="menuitem" class="font-weight-bold dropdown-item">Dracula</button><button type="button" tabindex="0" role="menuitem" class="font-weight-bold dropdown-item">Dreamweaver</button><button type="button" tabindex="0" role="menuitem" class="font-weight-bold dropdown-item">Eclipse</button><button type="button" tabindex="0" role="menuitem" class="font-weight-bold dropdown-item">Github</button><button type="button" disabled="disabled" tabindex="-1" class="font-weight-bold disabled dropdown-item">Monokai</button><button type="button" tabindex="0" role="menuitem" class="font-weight-bold dropdown-item">SQL Server</button><button type="button" tabindex="0" role="menuitem" class="font-weight-bold dropdown-item">Terminal</button><button type="button" tabindex="0" role="menuitem" class="font-weight-bold dropdown-item">TextMate</button><button type="button" tabindex="0" role="menuitem" class="font-weight-bold dropdown-item">Tomorrow</button><button type="button" tabindex="0" role="menuitem" class="font-weight-bold dropdown-item">Tomorrow Night</button><button type="button" tabindex="0" role="menuitem" class="font-weight-bold dropdown-item">Twilight</button><button type="button" tabindex="0" role="menuitem" class="font-weight-bold dropdown-item">Xcode</button></div></div></ul></nav></div></div><div class="mb-3 row"><div class="col-md-4">Fonte</div><div class="col-md-8"><nav class="p-0 navbar navbar-expand-md navbar-light"><ul class="w-100 navbar-nav"><div class="w-100 btn-group-sm dropdown"><button type="button" aria-haspopup="true" aria-expanded="false" class="nav-link font-weight-bold text-white text-left dropdown-toggle btn btn-outline-light btn-block">14</button><div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu-right"><button type="button" tabindex="0" role="menuitem" class="font-weight-bold dropdown-item">12</button><button type="button" disabled="disabled" tabindex="-1" class="font-weight-bold disabled dropdown-item">14</button><button type="button" tabindex="0" role="menuitem" class="font-weight-bold dropdown-item">16</button><button type="button" tabindex="0" role="menuitem" class="font-weight-bold dropdown-item">18</button><button type="button" tabindex="0" role="menuitem" class="font-weight-bold dropdown-item">20</button></div></div></ul></nav></div></div><div class="mb-3 row"><div class="col-md-4">Tab</div><div class="col-md-8"><nav class="p-0 navbar navbar-expand-md navbar-light"><ul class="w-100 navbar-nav"><div class="w-100 btn-group-sm dropdown"><button type="button" aria-haspopup="true" aria-expanded="false" class="nav-link font-weight-bold text-white text-left dropdown-toggle btn btn-outline-light btn-block">2</button><div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu-right"><button type="button" disabled="disabled" tabindex="-1" class="font-weight-bold disabled dropdown-item">2</button><button type="button" tabindex="0" role="menuitem" class="font-weight-bold dropdown-item">4</button><button type="button" tabindex="0" role="menuitem" class="font-weight-bold dropdown-item">6</button><button type="button" tabindex="0" role="menuitem" class="font-weight-bold dropdown-item">8</button></div></div></ul></nav></div></div><div class="mb-3 row"><div class="col-md-8">Autocompletar</div><div class="col-md-4"><nav class="p-0 navbar navbar-expand-md navbar-light"><ul class="w-100 navbar-nav"><div class="w-100 btn-group-sm dropdown"><button type="button" aria-haspopup="true" aria-expanded="false" class="nav-link font-weight-bold text-white text-left dropdown-toggle btn btn-outline-light btn-block">SIM</button><div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu-right"><button type="button" disabled="disabled" tabindex="-1" class="font-weight-bold disabled dropdown-item">SIM</button><button type="button" tabindex="0" role="menuitem" class="font-weight-bold dropdown-item">NÃO</button></div></div></ul></nav></div></div><div class="mb-3 row"><div class="col-md-8">Snippets</div><div class="col-md-4"><nav class="p-0 navbar navbar-expand-md navbar-light"><ul class="w-100 navbar-nav"><div class="w-100 btn-group-sm dropdown"><button type="button" aria-haspopup="true" aria-expanded="false" class="nav-link font-weight-bold text-white text-left dropdown-toggle btn btn-outline-light btn-block">SIM</button><div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu-right"><button type="button" disabled="disabled" tabindex="-1" class="font-weight-bold disabled dropdown-item">SIM</button><button type="button" tabindex="0" role="menuitem" class="font-weight-bold dropdown-item">NÃO</button></div></div></ul></nav></div></div></div></div></div><button type="button" class="p-0 btn btn-transparent btn-sm"><i style="font-size: 16px; color: rgb(255, 255, 255); font-family: MaterialCommunityIcons; font-weight: normal; font-style: normal;"></i></button></div></div></div></div></div><div style="height: 60vh;" class="p-0 card-body"><div id="code-editor" style="width: 100%; height: 100%; font-size: 14px;" class=" ace_editor ace-monokai ace_dark"><textarea class="ace_text-input" autocorrect="off" autocapitalize="none" spellcheck="false" style="opacity: 0; font-size: 1px; height: 1px; width: 1px; top: 170px; left: 189px;" wrap="off">  r += Math.abs(b);

</textarea><div class="ace_gutter" aria-hidden="true" style="left: 0px; width: 49px;"><div class="ace_layer ace_gutter-layer ace_folding-enabled" style="height: 1000000px; top: 0px; left: 0px; width: 49px;"><div class="ace_gutter-cell " style="height: 17px; top: 0px;">1<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 17px;">2<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 34px;">3<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 51px;">4<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 68px;">5<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 85px;">6<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 102px;">7<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 119px;">8<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 136px;">9<span class="ace_fold-widget ace_start ace_open" style="height: 17px; display: inline-block;"></span></div><div class="ace_gutter-active-line ace_gutter-cell " style="height: 17px; top: 153px;">10<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 170px;">11<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 187px;">12<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 204px;">13<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 221px;">14<span style="display: none;"></span></div></div></div><div class="ace_scroller" style="line-height: 17px; left: 49px; right: 0px; bottom: 0px;"><div class="ace_content" style="top: 0px; left: 0px; width: 862px; height: 403px;"><div class="ace_layer ace_print-margin-layer"><div class="ace_print-margin" style="left: 644px; visibility: hidden;"></div></div><div class="ace_layer ace_marker-layer"><div style="height: 17px; top: 153px; left: 0px; right: 0px;" class="ace_active-line"></div><div style="height: 17px; width: 8px; top: 153px; left: 140px;" class="ace_bracket ace_start ace_br15"></div><div style="height: 17px; width: 8px; top: 153px; left: 124px;" class="ace_bracket ace_start ace_br15"></div></div><div class="ace_layer ace_text-layer" style="height: 1000000px; margin: 0px 4px; top: 0px; left: 0px;"><div style="height: 17px; top: 0px;" class="ace_line"><span class="ace_storage ace_type">let</span> <span class="ace_identifier">line</span> <span class="ace_keyword ace_operator">=</span> <span class="ace_identifier">gets</span><span class="ace_paren ace_lparen">(</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">.</span><span class="ace_support ace_function">split</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">" "</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div><div style="height: 17px; top: 17px;" class="ace_line"></div><div style="height: 17px; top: 34px;" class="ace_line"><span class="ace_storage ace_type">const</span> <span class="ace_identifier">a</span> <span class="ace_keyword ace_operator">=</span> <span class="ace_variable ace_language">parseInt</span><span class="ace_paren ace_lparen">(</span><span class="ace_identifier">line</span><span class="ace_paren ace_lparen">[</span><span class="ace_constant ace_numeric">0</span><span class="ace_paren ace_rparen">])</span><span class="ace_punctuation ace_operator">;</span></div><div style="height: 17px; top: 51px;" class="ace_line"><span class="ace_storage ace_type">const</span> <span class="ace_identifier">b</span> <span class="ace_keyword ace_operator">=</span> <span class="ace_variable ace_language">parseInt</span><span class="ace_paren ace_lparen">(</span><span class="ace_identifier">line</span><span class="ace_paren ace_lparen">[</span><span class="ace_constant ace_numeric">1</span><span class="ace_paren ace_rparen">])</span><span class="ace_punctuation ace_operator">;</span></div><div style="height: 17px; top: 68px;" class="ace_line"></div><div style="height: 17px; top: 85px;" class="ace_line"><span class="ace_identifier">q</span> <span class="ace_keyword ace_operator">=</span> <span class="ace_variable ace_language">parseInt</span><span class="ace_paren ace_lparen">(</span><span class="ace_identifier">a</span> <span class="ace_keyword ace_operator">/</span> <span class="ace_identifier">b</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div><div style="height: 17px; top: 102px;" class="ace_line"><span class="ace_identifier">r</span> <span class="ace_keyword ace_operator">=</span> <span class="ace_identifier">a</span> <span class="ace_keyword ace_operator">-</span> <span class="ace_identifier">b</span> <span class="ace_keyword ace_operator">*</span> <span class="ace_identifier">q</span><span class="ace_punctuation ace_operator">;</span></div><div style="height: 17px; top: 119px;" class="ace_line"></div><div style="height: 17px; top: 136px;" class="ace_line"><span class="ace_keyword">if</span> <span class="ace_paren ace_lparen">(</span><span class="ace_identifier">r</span> <span class="ace_keyword ace_operator">&lt;</span> <span class="ace_constant ace_numeric">0</span><span class="ace_paren ace_rparen">)</span> <span class="ace_paren ace_lparen">{</span></div><div style="height: 17px; top: 153px;" class="ace_line">  <span class="ace_identifier">r</span> <span class="ace_keyword ace_operator">+=</span> <span class="ace_variable ace_language">Math</span><span class="ace_punctuation ace_operator">.</span><span class="ace_support ace_function">abs</span><span class="ace_paren ace_lparen">(</span><span class="ace_identifier">b</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div><div style="height: 17px; top: 170px;" class="ace_line">  <span class="ace_identifier">q</span> <span class="ace_keyword ace_operator">=</span> <span class="ace_paren ace_lparen">(</span><span class="ace_identifier">a</span><span class="ace_keyword ace_operator">-</span><span class="ace_identifier">r</span><span class="ace_paren ace_rparen">)</span><span class="ace_keyword ace_operator">/</span><span class="ace_identifier">b</span><span class="ace_punctuation ace_operator">;</span>   </div><div style="height: 17px; top: 187px;" class="ace_line"><span class="ace_paren ace_rparen">}</span></div><div style="height: 17px; top: 204px;" class="ace_line"></div><div style="height: 17px; top: 221px;" class="ace_line"><span class="ace_identifier">print</span><span class="ace_paren ace_lparen">(</span><span class="ace_identifier">q</span> <span class="ace_keyword ace_operator">+</span> <span class="ace_string">" "</span> <span class="ace_keyword ace_operator">+</span> <span class="ace_identifier">r</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div></div><div class="ace_layer ace_marker-layer"></div><div class="ace_layer ace_cursor-layer ace_hidden-cursors"><div class="ace_cursor" style="display: block; top: 153px; left: 140px; width: 8px; height: 17px; animation-duration: 1000ms;"></div></div></div></div><div class="ace_scrollbar ace_scrollbar-v" style="display: none; width: 22px; bottom: 0px;"><div class="ace_scrollbar-inner" style="width: 22px; height: 238px;">&nbsp;</div></div><div class="ace_scrollbar ace_scrollbar-h" style="display: none; height: 22px; left: 49px; right: 0px;"><div class="ace_scrollbar-inner" style="height: 22px; width: 911px;">&nbsp;</div></div><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font: inherit; overflow: hidden;"><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font: inherit; overflow: visible;">הההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההה</div><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; font-size-adjust: inherit; font-kerning: inherit; font-language-override: inherit; font-feature-settings: inherit; overflow: visible;">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div></div></div></div><div class="border-0 py-0 pr-0 editor-output card-footer"><div class="d-flex justify-content-end mb-5 row"><div class="pl-0 col-md-12"><div class="border-0 card"><div class="card-header"><div class="d-flex align-items-center row"><div class="pl-1 col-md-10"><span class="active">TESTES</span></div><div class="pr-1 col-md-2"><button type="button" bsstyle="default" class="font-weight-bold btn-execute-test btn btn-info btn-sm btn-block">EXECUTAR TESTES</button></div></div></div><div class="p-2 border-0 card-body"><div class="row"><div class="col-md-12"><div class="output-test mb-2 card"><div id="toggler-0" class="py-2 card-header"><div class="d-flex align-items-center row"><div class="col-md-11"><h6 class="mb-0">Teste #1</h6></div><div class="text-right col-md-1"><i style="font-size: 16px; color: rgb(204, 204, 204); font-weight: normal; margin-left: 0.3rem; font-family: MaterialCommunityIcons; font-style: normal;"></i></div></div></div><div toggler="#toggler-0" class="collapse"><div class="py-0 card-body"><hr><div class="pb-3 row"><div class="col-md-12"><div class="row"><div class="col-md-12"><strong>Dado de entrada:</strong><br><span class="white-space-pre-line">7 3</span></div></div><div class="row"><div class="col-md-12"><strong>Saída esperada:</strong><br><span class="white-space-pre-line">2 1</span></div></div><div class="mt-3 row"><div class="col-md-12"><i>Clique no botão "<strong>EXECUTAR TESTES</strong>" para visulizar a saída do seu algoritmo.</i></div></div></div></div></div></div></div><div class="output-test mb-2 card"><div id="toggler-1" class="py-2 card-header"><div class="d-flex align-items-center row"><div class="col-md-11"><h6 class="mb-0">Teste #2</h6></div><div class="text-right col-md-1"><i style="font-size: 16px; color: rgb(204, 204, 204); font-weight: normal; margin-left: 0.3rem; font-family: MaterialCommunityIcons; font-style: normal;"></i></div></div></div><div toggler="#toggler-1" class="collapse"><div class="py-0 card-body"><hr><div class="pb-3 row"><div class="col-md-12"><div class="row"><div class="col-md-12"><strong>Dado de entrada:</strong><br><span class="white-space-pre-line">7 -3</span></div></div><div class="row"><div class="col-md-12"><strong>Saída esperada:</strong><br><span class="white-space-pre-line">-2 1</span></div></div><div class="mt-3 row"><div class="col-md-12"><i>Clique no botão "<strong>EXECUTAR TESTES</strong>" para visulizar a saída do seu algoritmo.</i></div></div></div></div></div></div></div><div class="output-test mb-2 card"><div id="toggler-2" class="py-2 card-header"><div class="d-flex align-items-center row"><div class="col-md-11"><h6 class="mb-0">Teste #3</h6></div><div class="text-right col-md-1"><i style="font-size: 16px; color: rgb(204, 204, 204); font-weight: normal; margin-left: 0.3rem; font-family: MaterialCommunityIcons; font-style: normal;"></i></div></div></div><div toggler="#toggler-2" class="collapse"><div class="py-0 card-body"><hr><div class="pb-3 row"><div class="col-md-12"><div class="row"><div class="col-md-12"><strong>Dado de entrada:</strong><br><span class="white-space-pre-line">-7 -3</span></div></div><div class="row"><div class="col-md-12"><strong>Saída esperada:</strong><br><span class="white-space-pre-line">3 2</span></div></div><div class="mt-3 row"><div class="col-md-12"><i>Clique no botão "<strong>EXECUTAR TESTES</strong>" para visulizar a saída do seu algoritmo.</i></div></div></div></div></div></div></div><div class="output-test mb-2 card"><div id="toggler-3" class="py-2 card-header"><div class="d-flex align-items-center row"><div class="col-md-11"><h6 class="mb-0">Teste #4</h6></div><div class="text-right col-md-1"><i style="font-size: 16px; color: rgb(204, 204, 204); font-weight: normal; margin-left: 0.3rem; font-family: MaterialCommunityIcons; font-style: normal;"></i></div></div></div><div toggler="#toggler-3" class="collapse"><div class="py-0 card-body"><hr><div class="text-center alert alert-warning fade show" role="alert">Esse não é um teste de aberto.</div></div></div></div><div class="output-test mb-2 card"><div id="toggler-4" class="py-2 card-header"><div class="d-flex align-items-center row"><div class="col-md-11"><h6 class="mb-0">Teste #5</h6></div><div class="text-right col-md-1"><i style="font-size: 16px; color: rgb(204, 204, 204); font-weight: normal; margin-left: 0.3rem; font-family: MaterialCommunityIcons; font-style: normal;"></i></div></div></div><div toggler="#toggler-4" class="collapse"><div class="py-0 card-body"><hr><div class="text-center alert alert-warning fade show" role="alert">Esse não é um teste de aberto.</div></div></div></div><div class="output-test mb-2 card"><div id="toggler-5" class="py-2 card-header"><div class="d-flex align-items-center row"><div class="col-md-11"><h6 class="mb-0">Teste #6</h6></div><div class="text-right col-md-1"><i style="font-size: 16px; color: rgb(204, 204, 204); font-weight: normal; margin-left: 0.3rem; font-family: MaterialCommunityIcons; font-style: normal;"></i></div></div></div><div toggler="#toggler-5" class="collapse"><div class="py-0 card-body"><hr><div class="text-center alert alert-warning fade show" role="alert">Esse não é um teste de aberto.</div></div></div></div><div class="output-test mb-2 card"><div id="toggler-6" class="py-2 card-header"><div class="d-flex align-items-center row"><div class="col-md-11"><h6 class="mb-0">Teste #7</h6></div><div class="text-right col-md-1"><i style="font-size: 16px; color: rgb(204, 204, 204); font-weight: normal; margin-left: 0.3rem; font-family: MaterialCommunityIcons; font-style: normal;"></i></div></div></div><div toggler="#toggler-6" class="collapse"><div class="py-0 card-body"><hr><div class="text-center alert alert-warning fade show" role="alert">Esse não é um teste de aberto.</div></div></div></div><div class="output-test mb-2 card"><div id="toggler-7" class="py-2 card-header"><div class="d-flex align-items-center row"><div class="col-md-11"><h6 class="mb-0">Teste #8</h6></div><div class="text-right col-md-1"><i style="font-size: 16px; color: rgb(204, 204, 204); font-weight: normal; margin-left: 0.3rem; font-family: MaterialCommunityIcons; font-style: normal;"></i></div></div></div><div toggler="#toggler-7" class="collapse"><div class="py-0 card-body"><hr><div class="text-center alert alert-warning fade show" role="alert">Esse não é um teste de aberto.</div></div></div></div></div></div></div></div></div></div></div></div></div></div><div class="row"><div class="px-0 coding-footer false col-md-12"><div class="mb-0 fixed-bottom card"><div class="card-header"><div class="row"><div class="d-flex align-items-center justify-content-start col-md-8"><strong class="mr-2">Dúvidas ?</strong> Participe e converse com milhares de devs em nossa comunidade no Discord.<a href="https://discord.gg/MUdRyVg" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-secondary font-weight-bold ml-2"><i class="cib-discord"></i> ACESSAR COMUNDIDADE</a></div><div class="d-flex align-items-center justify-content-end pr-1 col-md-2 offset-md-2"><button type="button" bsstyle="default" class="font-weight-bold btn-delivery-code btn btn-success btn-sm btn-block">ENTREGAR DESAFIO</button></div></div></div></div></div></div></div></div><div id="modal-transition"></div><script>!function(){var e=window.analytics=window.analytics||[];if(!e.initialize)if(e.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{e.invoked=!0,e.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"],e.factory=function(t){return function(){var n=Array.prototype.slice.call(arguments);return n.unshift(t),e.push(n),e}};for(var t=0;t<e.methods.length;t++){var n=e.methods[t];e[n]=e.factory(n)}e.load=function(t,n){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(a,o),e._loadOptions=n},e.SNIPPET_VERSION="4.1.0",e.load("3OVnvIh6yXupEgIXmtJLWnJd7gwJACnx"),e.page()}}()</script><script src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/checkout.js"></script><script async="" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/adsbygoogle.js"></script><script>function onLoadPage(){window.adsbygoogle=window.adsbygoogle||[],window.zE&&window.zE("webWidget:on","chat:connected",(function(){window.enableChat()||$zopim.livechat.window.hide()}))}var tag=document.createElement("script");tag.src="https://www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName("script")[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag)</script><script>!function(e){function t(t){for(var n,u,a=t[0],c=t[1],l=t[2],s=0,p=[];s<a.length;s++)u=a[s],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(f&&f(t);p.length;)p.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={1:0},i=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var i,a=document.createElement("script");a.charset="utf-8",a.timeout=120,u.nc&&a.setAttribute("nonce",u.nc),a.src=function(e){return u.p+"static/js/"+({}[e]||e)+"."+{3:"57ab08ab"}[e]+".chunk.js"}(e);var c=new Error;i=function(t){a.onerror=a.onload=null,clearTimeout(l);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",c.name="ChunkLoadError",c.type=n,c.request=i,r[1](c)}o[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:a})}),12e4);a.onerror=a.onload=i,document.head.appendChild(a)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var a=this["webpackJsonp@digitalinnovation/web"]=this["webpackJsonp@digitalinnovation/web"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var f=c;r()}([])</script><script src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/2.js"></script>
<script type="text/javascript" id="">!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","614551849008360");fbq("track","PageView");</script>
<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=614551849008360&amp;ev=PageView&amp;noscript=1"></noscript>

<script type="text/javascript" id="">(function(a,c,e,f,d,b){a.hj=a.hj||function(){(a.hj.q=a.hj.q||[]).push(arguments)};a._hjSettings={hjid:1255605,hjsv:6};d=c.getElementsByTagName("head")[0];b=c.createElement("script");b.async=1;b.src=e+a._hjSettings.hjid+f+a._hjSettings.hjsv;d.appendChild(b)})(window,document,"https://static.hotjar.com/c/hotjar-",".js?sv\x3d");</script><script type="text/javascript" id="">(function(a,d,e,f,g,b,c){a.visitorGlobalObjectAlias=f;a[a.visitorGlobalObjectAlias]=a[a.visitorGlobalObjectAlias]||function(){(a[a.visitorGlobalObjectAlias].q=a[a.visitorGlobalObjectAlias].q||[]).push(arguments)};a[a.visitorGlobalObjectAlias].l=(new Date).getTime();b=d.createElement("script");b.src=e;b.async=!0;c=d.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)})(window,document,"https://diffuser-cdn.app-us1.com/diffuser/diffuser.js","vgo");vgo("setAccount","475833027");
vgo("setTrackByDefault",!0);vgo("process");</script><script type="text/javascript" id="">(function(a,e,f,g,b,c,d){a.MauticTrackingObject=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,"script","http://mautic.dio.me/mtc.js","mt");mt("send","pageview");</script>
<script type="text/javascript" id="" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/js"></script><script type="text/javascript" id="">(function(a,e,b,f,g,c,d){a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};c=e.createElement(f);c.async=1;c.src="https://www.clarity.ms/tag/"+g;d=e.getElementsByTagName(f)[0];d.parentNode.insertBefore(c,d)})(window,document,"clarity","script","5q1spn4z03");</script>
<script type="text/javascript" id="" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/blue-tag.js"></script>
	<script type="text/javascript" id="">!function(d,g,e){d.TiktokAnalyticsObject=e;var a=d[e]=d[e]||[];a.methods="page track identify instances debug on off once ready alias group enableCookie disableCookie".split(" ");a.setAndDefer=function(b,c){b[c]=function(){b.push([c].concat(Array.prototype.slice.call(arguments,0)))}};for(d=0;d<a.methods.length;d++)a.setAndDefer(a,a.methods[d]);a.instance=function(b){b=a._i[b]||[];for(var c=0;c<a.methods.length;c++)a.setAndDefer(b,a.methods[c]);return b};a.load=function(b,c){var f="https://analytics.tiktok.com/i18n/pixel/events.js";
a._i=a._i||{};a._i[b]=[];a._i[b]._u=f;a._t=a._t||{};a._t[b]=+new Date;a._o=a._o||{};a._o[b]=c||{};c=document.createElement("script");c.type="text/javascript";c.async=!0;c.src=f+"?sdkid\x3d"+b+"\x26lib\x3d"+e;b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(c,b)};a.load("C6SU28SOEC724R8P40G0");a.page()}(window,document,"ttq");</script>
	
	<script type="text/javascript" id="">!function(d,g,e){d.TiktokAnalyticsObject=e;var a=d[e]=d[e]||[];a.methods="page track identify instances debug on off once ready alias group enableCookie disableCookie".split(" ");a.setAndDefer=function(b,c){b[c]=function(){b.push([c].concat(Array.prototype.slice.call(arguments,0)))}};for(d=0;d<a.methods.length;d++)a.setAndDefer(a,a.methods[d]);a.instance=function(b){b=a._i[b]||[];for(var c=0;c<a.methods.length;c++)a.setAndDefer(b,a.methods[c]);return b};a.load=function(b,c){var f="https://analytics.tiktok.com/i18n/pixel/events.js";
a._i=a._i||{};a._i[b]=[];a._i[b]._u=f;a._t=a._t||{};a._t[b]=+new Date;a._o=a._o||{};a._o[b]=c||{};c=document.createElement("script");c.type="text/javascript";c.async=!0;c.src=f+"?sdkid\x3d"+b+"\x26lib\x3d"+e;b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(c,b)};a.load("C707J8P6C8JAV1214430");a.page()}(window,document,"ttq");</script>
	<script type="text/javascript" id="">(function(a,e,b,f,g,c,d){a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};c=e.createElement(f);c.async=1;c.src="https://www.clarity.ms/tag/"+g;d=e.getElementsByTagName(f)[0];d.parentNode.insertBefore(c,d)})(window,document,"clarity","script","b12gwzksd7");</script><script src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/main.js"></script>
<script type="text/javascript" id="">window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date);gtag("config","AW-769359912");</script>

<script type="text/javascript" id="">window.blue_q=window.blue_q||[];window.blue_q.push({event:"setCampaignId",value:"D349FA1D-09CA-BFB9-9B892BC2BC1D3605"},{event:"setPageType",value:"visit"});</script><div id="blue-tags-div" style="display:none;"><iframe src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/a_005.htm" style="border-width:0px; margin:0px;" width="1" height="1" frameborder="0"></iframe><script async="true" type="text/javascript" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/a"></script></div>
<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>
<iframe style="display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;" name="_hjRemoteVarsFrame" title="_hjRemoteVarsFrame" id="_hjRemoteVarsFrame" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/box-4924254a9ce4dc9b959b6e4a9b662d60.htm"></iframe><script src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/adsct" type="text/javascript"></script>
<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>
<script type="text/javascript" async="async" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/iframe_api"></script>
<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>
<script type="text/javascript" async="async" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/iframe_api"></script>
<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>
<script type="text/javascript" async="async" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/iframe_api"></script>
<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>
<script type="text/javascript" async="async" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/iframe_api"></script>
<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>
<script type="text/javascript" async="async" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/iframe_api"></script>
<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>
<script type="text/javascript" async="async" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/iframe_api"></script>
<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>
<script type="text/javascript" async="async" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/iframe_api"></script>
<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>

<script>
window[window.TiktokAnalyticsObject].instance("C707J8P6C8JAV1214430").track("ViewContent",{"pixelMethod":"standard"});
</script>
</body><iframe style="display: none;" id="__JSBridgeIframe_1.0__"></iframe><iframe style="display: none;" id="__JSBridgeIframe_SetResult_1.0__"></iframe><iframe style="display: none;" id="__JSBridgeIframe__"></iframe><iframe style="display: none;" id="__JSBridgeIframe_SetResult__"></iframe><iframe id="google_esf" name="google_esf" src="Desafio%20Teorema%20da%20Divis%C3%A3o%20Euclidiana_arquivos/zrt_lookup.htm" style="display: none;"></iframe></html>