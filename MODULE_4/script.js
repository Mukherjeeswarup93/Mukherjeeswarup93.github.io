var names=new Array();
names[0]="Yevadu";
names[1]="Johan";
names[2]="Jen";
names[3]="lila";
names[4]="poul";
names[5]="fanie";
names[6]="juice";
names[7]="paula";
names[8]="lumbini";
names[9]="jonny";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='j'|| names[i].charAt(0)==='J'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}