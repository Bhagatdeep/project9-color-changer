var n1,n2 ;

function setup() {

createcanvas(400,400);

num1 = createInput();
num1.position(5,60);

num2 = createInput();
num2.position(200,60);

b1 = createButton("ADD");
b1.position(10,200);
b1.mousepressed(add);




}




