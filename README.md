# Search select one
![Default appearance for the 'search-select-one' field plug-in](extras/default-search.jpg)
*Screenshot of search using default appearance*

![Appearance for the 'search-select-one' field plug-in with minimal](extras/minimal-search.jpg)
*Screenshot of search using minimal appearance*

## Description

This field plug-in adds the ability to filter choice list options for a *select_mutiple* field. Filter by entering search text into the search field. Also see the sibling field plug-in, [search-select_multiple](https://github.com/surveycto/search-select-multiple).

[![Download now](extras/download-button.png)](https://github.com/surveycto/search-select-one/raw/master/search-select-one.fieldplugin.zip)

## Default SurveyCTO feature support

| Feature / Property | Support |
| --- | --- |
| Supported field type(s) | `select_one`|
| Default values | Yes |
| Custom constraint message | Yes |
| Custom required message | Yes |
| Read only | Yes |
| media:image | Yes |
| media:audio | Yes |
| media:video | Yes |
| `quick` appearance | Yes |
| `minimal` appearance | Yes |
| `compact` appearance | No |
| `compact-#` appearance | No |
| `quickcompact` appearance | No |
| `quickcompact-#` appearance | No |
| `likert` appearance | Yes |
| `likert-min` appearance | Yes* |
| `likert-mid` appearance | No |

**Note**: this plug-in works well for the likert-min appearance when the field label is short, and does not contain an image, audio, or video. This is a known limitation currently.

## Expanded feature support

In addition to supporting the default SurveyCTO features listed above, this field plug-in offers the following expanded functionality, inherited from the [baseline-select_one field plug-in](https://github.com/surveycto/baseline-select_one):

1. Support for RTL languages  
    If your *label*, *hint*, or choice labels are in a language that uses a right-to-left alphabet (like Arabic), they will be right-justified, and the radio buttons will be to the right of the choice labels. If your form contains both right-to-left and left-to-right choice labels, the formatting will respond to the currently-selected form language.
1. Support for HTML in choice labels  
    This plug-in will allow HTML in choice labels to be rendered as HTML, even in Collect on Android and iOS.
1. Support for HTML in field references  
    If you reference another field's value in either the field *label* or field *hint*, and that referenced value contains HTML, the HTML will be correctly rendered.

## How to use

1. Download the test form [extras/sample-form](https://github.com/surveycto/search-select-one/raw/master/extras/sample-form/plugin_test_form_search_select_one.xlsx) from this repo and upload it to your SurveyCTO server.
1. Download the [search-select-one.fieldplugin.zip](https://github.com/surveycto/search-select-one/raw/master/search-select-ne.fieldplugin.zip) file from this repo, and attach it to the test form on your SurveyCTO server.

## More resources

* **Test form**  
You can find a sample form definition here:   
[Download sample form](https://github.com/surveycto/search-select-one/raw/master/extras/sample-form/plugin_test_form_search_select_one.xlsx)  

* **Developer documentation**  
Instructions and resources for developing your own field plug-ins.  
[https://github.com/surveycto/Field-plug-in-resources](https://github.com/surveycto/Field-plug-in-resources)

* **User documentation**  
How to get started using field plug-ins in your SurveyCTO form.  
[https://docs.surveycto.com/02-designing-forms/03-advanced-topics/06.using-field-plug-ins.html](https://docs.surveycto.com/02-designing-forms/03-advanced-topics/06.using-field-plug-ins.html)
