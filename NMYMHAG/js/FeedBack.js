function Update_FeedBack_Note()
{
	var FeedBack_Infos = document.getElementById('FeedBack_Infos');
	var Note = document.getElementById('Note');

	if (Note.options[Note.selectedIndex].value == "1 / 5")
	{
		FeedBack_Infos.innerHTML = ' <img src="assets/img/FeedBack_Star.png"/>';
	}
	if (Note.options[Note.selectedIndex].value == "2 / 5")
	{
		FeedBack_Infos.innerHTML = ' <img src="assets/img/FeedBack_Star.png"/><img src="assets/img/FeedBack_Star.png"/>';
	}
	if (Note.options[Note.selectedIndex].value == "3 / 5")
	{
		FeedBack_Infos.innerHTML = ' <img src="assets/img/FeedBack_Star.png"/><img src="assets/img/FeedBack_Star.png"/><img src="assets/img/FeedBack_Star.png"/>';
	}
	if (Note.options[Note.selectedIndex].value == "4 / 5")
	{
		FeedBack_Infos.innerHTML = ' <img src="assets/img/FeedBack_Star.png"/><img src="assets/img/FeedBack_Star.png"/><img src="assets/img/FeedBack_Star.png"/><img src="assets/img/FeedBack_Star.png"/>';
	}
	if (Note.options[Note.selectedIndex].value == "5 / 5")
	{
		FeedBack_Infos.innerHTML = ' <img src="assets/img/FeedBack_Star.png"/><img src="assets/img/FeedBack_Star.png"/><img src="assets/img/FeedBack_Star.png"/><img src="assets/img/FeedBack_Star.png"/><img src="assets/img/FeedBack_Star.png"/>';
	}

}