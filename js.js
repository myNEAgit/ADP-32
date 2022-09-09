const loadData = async () => {
    try {
        const res = await fetch('data.js');
        filtered = await res.json();
        filtered.forEach(function(x){
            console.log(x);
            //dropdown
            var dropdown = document.getElementById('dropdownItems');
            dropdown.insertAdjacentHTML('beforeend', '<a href="javascript:void(0);" state-target="'+x.stateAbbr+'">'+x.state+'</a>');
            //modals    
            var stateContainer = document.getElementById('state');
            stateContainer.insertAdjacentHTML('afterend',
            '<div id="modal_'+x.stateAbbr.replace(' ', '-')+'" class="modal">\
              <div class="modal-content">\
                <p class="close">&times;</p>\
                <h1>'+x.state+'</h1>\
                <div id="all-artists">\
                    <div class="data-row text-center">\
                        <img src="img/location.svg" />\
                        <div class="all-artists-info">\
                            <p class="percentage">'+x.attendOrVisit+'</p>\
                            <p><strong>Attend or Visit</strong></p>\
                        </div>\
                    </div>\
                    <hr>\
                    <div class="data-row text-center">\
                        <img src="img/personallyCreated.svg" />\
                        <div class="all-artists-info">\
                            <p class="percentage">'+x.performCreate+'</p>\
                            <p><strong>Personally Perform or Create</strong></p>\
                        </div>\
                    </div>\
                    <hr>\
                    <div class="data-row text-center">\
                        <img src="img/read.svg" />\
                        <div class="all-artists-info">\
                            <p class="percentage">'+x.read+'</p>\
                            <p><strong>Read Literature</strong></p>\
                        </div>\
                    </div>\
                    <hr>\
                    <div class="data-row text-center">\
                        <img src="img/devices.svg" />\
                        <div class="all-artists-info">\
                            <p class="percentage">'+x.device+'</p>\
                            <p><strong>Use a Device</strong></p>\
                        </div>\
                    </div>\
                </div>\
              </div>\
            </div>'
            );
        });
    } catch (err) {
        console.log(err);
    };

    function fireModal(target, selector){
        target.forEach(function(x){
            var getAttributes = x.getAttribute('state-target');
            //get button
            var targetAttributes = document.querySelector(selector + '[state-target="'+getAttributes+'"]');
            //get modal
            var getModal = document.getElementById('modal_'+getAttributes);
            //get close button
            var getCloseBtn = document.querySelector('#modal_'+getAttributes+' .modal-content .close');
            targetAttributes.addEventListener('click', function(){
                getModal.style.display = "block";
            })
            getCloseBtn.onclick = function() {
                getModal.style.display = "none";
            }
        })
    }
    var getStateTargetIds = document.querySelectorAll('svg a');
    var getDropdownTargets = document.querySelectorAll('#dropdownItems a');
    var getAllStateTargetId = document.querySelectorAll('.intro-data a');
    
    fireModal(getStateTargetIds, 'svg a');
    fireModal(getDropdownTargets, '#dropdownItems a');
    fireModal(getAllStateTargetId, '.intro-data a');

};
function dropdown() {
    document.getElementById('dropdownItems').classList.toggle('show');
    
    document.getElementById('arrow').classList.toggle('rotated');

    var ariaExpanded = document.getElementsByClassName('dropbtn')[0];
    var getAriaExpanded = ariaExpanded.getAttribute('aria-expanded');

    if (getAriaExpanded === 'false') {
        ariaExpanded.setAttribute('aria-expanded', 'true');
    } else {
        ariaExpanded.setAttribute('aria-expanded', 'false');
    };
};
window.onclick = function(event) {
    if ((!event.target.matches('#arrow')) && ((!event.target.matches('.select-state')))) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        if (dropdowns[0].classList.contains('show')) {
            dropdowns[0].classList.remove('show');
        };
    };
};
loadData();
var getStateName = document.getElementById('state-name');
function tooltipShow(x){
    var stateName = x.getAttribute('aria-label');
    getStateName.innerHTML = '<h2>'+stateName+'</h2>';
};
function tooltipHide(){
    getStateName.innerHTML = '<h2>Select a State</h2>';
};