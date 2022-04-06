// const content_1 = document.getElementById('certificate_content_1');
// const content_2 = document.getElementById('certificate_content_2');
// const content_3 = document.getElementById('certificate_content_3');

function mouseenterFunction(content) {
    if (content == 'certificate_content_1') {
        document.getElementById(content).innerHTML = '<h1>885</h1><p class="lead pt-3 text-black-50">put your mouse pointer to see her score</p>'
    }
    else if (content == 'certificate_content_2'){
        document.getElementById(content).innerHTML = '<h1>IH level</h1><p class="lead pt-3 text-black-50">put your mouse pointer to see her level</p>'
    }
    else if (content == 'certificate_content_3'){
        document.getElementById(content).innerHTML = '<h1>1급</h1><p class="lead pt-3 text-black-50">put your mouse pointer to see her level</p>'
    }
}
function mouseoutFunction(content) {
    if (content == 'certificate_content_1') {
        document.getElementById(content).innerHTML = '<h1>TOEIC Score</h1><p class="lead pt-3 text-black-50">put your mouse pointer to see her score</p>'
    }
    else if (content == 'certificate_content_2'){
        document.getElementById(content).innerHTML = '<h1>OPIc Level</h1><p class="lead pt-3 text-black-50">put your mouse pointer to see her level</p>'
    }
    else if (content == 'certificate_content_3'){
        document.getElementById(content).innerHTML = '<h1>Korean History Exam</h1><p class="lead pt-3 text-black-50">put your mouse pointer to see her level</p>'
    }
}