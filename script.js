function insert_Row() {
    //Write your code here
    const table=document.querySelector("#sampleTable");
	const tr=table.insertRow(0);
	const td1=tr.insertCell(0);
	const td2=tr.insertCell(1);
	td1.textContent="New Cell1";
	td2.textContent="New Cell2";
}
