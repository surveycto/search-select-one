// References to the supported choice containers
var radioButtonsContainer = document.getElementById('radio-buttons-container') // default radio buttons
var selectDropDownContainer = document.getElementById('select-dropdown-container') // minimal appearance
var likertContainer = document.getElementById('likert-container') // likert
var input = document.getElementById('filter-text') // search text entry

// Detect right-to-left languages
function isRTL (s) {
  var ltrChars = 'A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF' + '\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF'
  var rtlChars = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC'
  var rtlDirCheck = new RegExp('^[^' + ltrChars + ']*[' + rtlChars + ']')

  return rtlDirCheck.test(s)
}

// Add filtering of response options
input.addEventListener('keyup', function (e) {
  var query = $.trim($('#filter-text').val()).toLowerCase()
  $('div.radio .search').each(function () {
    var $this = $(this)
    if ($this.text().toLowerCase().indexOf(query) === -1) { $this.closest('div.radio').fadeOut() } else $this.closest('div.radio').fadeIn()
  })
})

// Prepare the current webview, making adjustments for any appearance options

// minimal appearance
if (fieldProperties.APPEARANCE.includes('minimal') === true) {
  radioButtonsContainer.parentElement.removeChild(radioButtonsContainer) // remove the default radio buttons
  likertContainer.parentElement.removeChild(likertContainer) // remove the likert container
  selectDropDownContainer.style.display = 'block' // show the select dropdown
  $('#select-dropdown-container').select2({
    placeholder: 'Select one answer',
    allowClear: false
  })
}
// likert appearance
else if (fieldProperties.APPEARANCE.includes('likert') === true) {
  radioButtonsContainer.parentElement.removeChild(radioButtonsContainer) // remove the default radio buttons
  selectDropDownContainer.parentElement.removeChild(selectDropDownContainer) // remove the select dropdown contrainer
  likertContainer.style.display = 'flex' // show the likert container
  // likert-min appearance
  if (fieldProperties.APPEARANCE.includes('likert-min') === true) {
    var likertChoices = document.getElementsByClassName('likert-choice-container')
    for (var i = 1; i < likertChoices.length - 1; i++) {
      likertChoices[i].querySelector('.likert-choice-label').style.display = 'none' // hide all choice labels except the first and last
    }
    likertChoices[0].querySelector('.likert-choice-label').classList.add('likert-min-choice-label-first') // apply a special class to the first choice label
    likertChoices[likertChoices.length - 1].querySelector('.likert-choice-label').classList.add('likert-min-choice-label-last') // apply a special class to the last choice label
  }
}
// all other appearances
else {
  if (fieldProperties.LANGUAGE !== null && isRTL(fieldProperties.LANGUAGE)) {
    radioButtonsContainer.dir = 'rtl'
  }

  selectDropDownContainer.parentElement.removeChild(selectDropDownContainer) // remove the select dropdown contrainer
  likertContainer.parentElement.removeChild(likertContainer) // remove the likert container
  // quick appearance
  if (fieldProperties.APPEARANCE.includes('quick') === true) {
    var choiceContainers = document.getElementsByClassName('choice-container') // go through all the available choices
    for (var i = 0; i < choiceContainers.length; i++) {
      choiceContainers[i].classList.add('appearance-quick') // add the 'appearance-quick' class
      choiceContainers[i].getElementsByClassName('choice-label-text')[0].insertAdjacentHTML('beforeend', '<svg class="quick-appearance-icon"><use xlink:href="#quick-appearance-icon" /></svg>') // insert the 'quick' icon
    }
  }
}

// Define what happens when the user attempts to clear the response

function clearAnswer () {
  // minimal appearance
  if (fieldProperties.APPEARANCE.includes('minimal') === true) {
    selectDropDownContainer.value = ''
  }
  // likert appearance
  else if (fieldProperties.APPEARANCE.includes('likert') === true) {
    var selectedOption = document.querySelector('.likert-input-button.selected')
    if (selectedOption) {
      selectedOption.classList.remove('selected')
    }
  }
  // all other appearances
  else {
    var selectedOption = document.querySelector('input[name="opt"]:checked')
    if (selectedOption) {
      selectedOption.checked = false
      selectedOption.parentElement.classList.remove('selected')
    }
  }
}

// Save the user's response (update the current answer)

function change () {
  setAnswer(this.value)
  // If the appearance is 'quick', then also progress to the next field
  if (fieldProperties.APPEARANCE.includes('quick') === true) {
    goToNextField()
  }
}
// minimal appearance
if (fieldProperties.APPEARANCE.includes('minimal') === true) {
  selectDropDownContainer.onchange = change // when the select dropdown is changed, call the change() function (which will update the current value)
}
// likert appearance
else if (fieldProperties.APPEARANCE.includes('likert') === true) {
  var likertButtons = document.querySelectorAll('div[name="opt"]')
  for (var i = 0; i < likertButtons.length; i++) {
    likertButtons[i].onclick = function () {
      // clear previously selected option (if any)
      var selectedOption = document.querySelector('.likert-input-button.selected')
      if (selectedOption) {
        selectedOption.classList.remove('selected')
      }
      this.classList.add('selected') // mark clicked option as selected
      change.apply({ value: this.getAttribute('data-value') }) // call the change() function and tell it which value was selected
    }
  }
}
// all other appearances
else {
  var buttons = document.querySelectorAll('input[name="opt"]')
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].onchange = function () {
      // remove 'selected' class from a previously selected option (if any)
      var selectedOption = document.querySelector('.choice-container.selected')
      if (selectedOption) {
        selectedOption.classList.remove('selected')
      }
      this.parentElement.classList.add('selected') // add 'selected' class to the new selected option
      change.apply(this) // call the change() function and tell it which value was selected
    }
  }
}

// If the field label or hint contain any HTML that isn't in the form definition, then the < and > characters will have been replaced by their HTML character entities, and the HTML won't render. We need to turn those HTML entities back to actual < and > characters so that the HTML renders properly. This will allow you to render HTML from field references in your field label or hint.
function unEntity (str) {
  return str.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
}
if (fieldProperties.LABEL) {
  document.querySelector('.label').innerHTML = unEntity(fieldProperties.LABEL)
}
if (fieldProperties.HINT) {
  document.querySelector('.hint').innerHTML = unEntity(fieldProperties.HINT)
}
