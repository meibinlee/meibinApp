// const content_1 = document.getElementById('certificate_content_1');
// const content_2 = document.getElementById('certificate_content_2');
// const content_3 = document.getElementById('certificate_content_3');

function mouseenterFunction(content) {
    if (content == 'certificate_content_1') {
        document.getElementById(content).innerHTML = '<h1 data-aos="zoom-in" data-aos-duration="500" data-aos-delay="0">885</h1><p class="lead pt-3 text-black-50">put your mouse pointer to see her score</p>'
    }
    else if (content == 'certificate_content_2'){
        document.getElementById(content).innerHTML = '<h1 data-aos="zoom-in" data-aos-duration="500" data-aos-delay="0">IH level</h1><p class="lead pt-3 text-black-50">put your mouse pointer to see her level</p>'
    }
    else if (content == 'certificate_content_3'){
        document.getElementById(content).innerHTML = '<h1 data-aos="zoom-in" data-aos-duration="500" data-aos-delay="0">1급</h1><p class="lead pt-3 text-black-50">put your mouse pointer to see her level</p>'
    }
}
function mouseoutFunction(content) {
    if (content == 'certificate_content_1') {
        document.getElementById(content).innerHTML = '<h1 data-aos="zoom-out" data-aos-duration="500" data-aos-delay="0">TOEIC Score</h1><p class="lead pt-3 text-black-50">put your mouse pointer to see her score</p>'
    }
    else if (content == 'certificate_content_2'){
        document.getElementById(content).innerHTML = '<h1 data-aos="zoom-out" data-aos-duration="500" data-aos-delay="0">OPIc Level</h1><p class="lead pt-3 text-black-50">put your mouse pointer to see her level</p>'
    }
    else if (content == 'certificate_content_3'){
        document.getElementById(content).innerHTML = '<h1 data-aos="zoom-out" data-aos-duration="500" data-aos-delay="0">Korean History Exam</h1><p class="lead pt-3 text-black-50">put your mouse pointer to see her level</p>'
    }
}