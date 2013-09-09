var win = Ti.UI.createWindow({ title: 'Memory Leaks' });

Ti.include('test1.js');

var wrapper = Ti.UI.createView({
	backgroundColor: '#ccc',
	layout: 'vertical'
});
var test1btn = Ti.UI.createButton({
	title: 'Open leaky window',
	width: 200,
	height: 45,
	top: 50
});

function handleTest(_event) {
	test1.build();
};

test1btn.addEventListener('click', handleTest);

wrapper.add(test1btn);
win.add(wrapper);
win.open();

if((Ti.Platform.osname=='iphone' || Ti.Platform.osname=='ipad') && parseFloat(Ti.Platform.version) < 7.0) {
    alert('Sorry, this app requires iOS 7.0 or greater');
}
