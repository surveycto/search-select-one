# Search-select-one
Screenshot of search using default appearance
![Default appearance for the 'search-select-one' field plug-in](extras/default-search.jpg)

Screenshot of search using minimal appearance
![Appearance for the 'search-select-one' field plug-in with minimal](extras/minimal-search.jpg)

## Description

This builds on the [baseline-select_one fieldplugin](https://github.com/surveycto/baseline-select_one), adding the ability to ***filter*** the options by searching when using the default and minimal appearance.

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

**Note: this plug-in works well for the likert-min appearance when the field label is short, and does not contain an image, audio, or video. This is a known limitation currently.

## Expanded feature support

In addition to supporting the default SurveyCTO features listed above, this field plug-in offers the following expanded functionality:

1. Support for RTL languages  
    If your *label*, *hint*, or choice labels are in a language that uses a right-to-left alphabet (like Arabic), they will be right-justified, and the radio buttons will be to the right of the choice labels. If your form contains both right-to-left and left-to-right choice labels, the formatting will respond to the currently-selected form language.
1. Support for HTML in choice labels  
    This plug-in will allow HTML in choice labels to be rendered as HTML, even in Collect on Android and iOS.
1. Support for HTML in field references  
    If you reference another field's value in either the field *label* or field *hint*, and that referenced value contains HTML, the HTML will be correctly rendered.

## How to use

**To use this plug-in as-is**, just download the [search-select-one.fieldplugin.zip](https://github.com/surveycto/search-select-one/raw/master/search-select-ne.fieldplugin.zip) file from this repo, and attach it to your form.

To create your own field plug-in using this as a template, follow these steps:

1. Fork this repo
1. Make changes to the files in the `source` directory.

    * **Note:** be sure to update the `manifest.json` file as well.

1. Zip the updated contents of the `source` directory.
1. Rename the .zip file to *yourpluginname*.fieldplugin.zip (replace *yourpluginname* with the name you want to use for your plug-in).
1. You may then attach your new .fieldplugin.zip file to your form as normal.

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
