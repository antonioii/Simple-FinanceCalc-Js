let appList = {
    uniqueContribuitionTab: '- An app to calculate future earnings from an unique contribuition investment -',
    recurringInvestmentTab: '- An app to calculate future earnings from recurring contribuition investments -',
    instalmmentsTab: '- An app to compare instalmments with single payment methods -'
}

let tabs = document.getElementsByClassName('tab');

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function(e) {
    for (let c = 0; c < tabs.length; c++) {
        tabs[c].className = 'tab';
    }
  	document.getElementById('tabApplication').innerHTML = '<h2 class=\'tabDescriptionHeading\'>' + e.currentTarget.innerHTML + '</h2><p class=\'tabDescriptionContent\'>' + appList[e.currentTarget.id] + "</p>";
    document.getElementById('tabApplication').className = 'tabApplication';
    e.currentTarget.className = 'tab tabActive';
  });

}