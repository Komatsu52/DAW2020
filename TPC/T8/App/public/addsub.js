function addSub() {
    console.log('New Option available');

    var newOption = $('<div class="w3-row w3-margin-bottom"><div class="w3-col s3"><label class="w3-text-teal"><b>Select file</b></label></div><div class="w3-col s9 w3-border"><input class="w3-input w3-border w3-light-grey" type="file" name="myFile"></div></div>')

    $("#form").append(newOption)
}