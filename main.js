console.log("ЗАДАНИЕ 1");
/*Напишите функцию absValue без Math.abs(x), 
которая в качестве параметра принимает число 
и возвращает его абсолютное значение (по модулю)*/
let absValue=-5;
if (absValue<0){
    console.log(absValue*(-1));
} else 
    console.log(absValue);

console.log("ЗАДАНИЕ 2");
/*Написать функцию isPalindrome, которая в качестве параметра 
принимает слово, проверяет является ли слово палиндромом 
(читается одинаково в обоих направлениях) и выводит true или false*/

ffunction isPalindrome(w, len){
    let differentLetter=0;
    for (let i=0; i<=len/2; i++) {
        //console.log('A', w[i], w[len-(i+1)]);
        if (w[i]!=w[len-(i+1)]) {
            console.log("false");
            return false;
        } 
    }
    console.log("true");
}
let word='довод', lengthWord=word.length;
isPalindrome(word, lengthWord);

console.log("ЗАДАНИЕ 3");
/*Напишите функцию matrixAddition, которая в качестве параметров принимает 2 матрицы и выводит 
результирующую матрицу в консоль. Функция должна проверить размеры матриц и если они равны 
(равны длина строки и количество строк в матрицах), то произвести сложение матриц. В противном случае 
вывести в консоль сообщение, что матрицы не равны и операция невозможна. При сложении двух матрицы 
складываются соответствующие их элементы. Обратите внимание на формат вывода - используйте спецсимволы \n и \t.*/

function matrixAddition(matrix1, matrix2){
    let Lenght1=matrix1.length, Lenght2=matrix2.length;
    let len1=[], len2=[];
    for (let i=0; i<Lenght1; i++) {
        let l=matrix1[i].length;
        len1.push(l);
        }
    for (i=0; i<Lenght2; i++) {
        let l=matrix2[i].length;
        len2.push(l);
    }

    if (Lenght1==Lenght2) {
        for (i=0; i<Lenght1; i++) {
            if (len1[i]==len2[i]) {
                for (let j=0; j<len1[i]; j++){
                    matrix1[i][j]=matrix1[i][j]+matrix2[i][j];
                }
            }
            else {
                console.log('матрицы не равны и операция невозможна')
            }   
            
        }
        console.log(matrix1);
    }
    else {
        console.log('матрицы не равны и операция невозможна')
    }
}
let matrix1=[[2,8],[7,8]], matrix2=[[9,4],[7,4]];
matrixAddition(matrix1, matrix2)


console.log("ЗАДАНИЕ 4");
/*Список свойств: group, last_name, first_name
Студент Иван Иванов учится в 201 группе*/
let student = {
    group: 201,
    last_name: "Иванов",
    first_name: "Иван"
    };
console.log("Список свойств:", Object.keys(student));
console.log(`Студент ${student.last_name} ${student.first_name} учится в ${student.group} группе`);


console.log("ЗАДАНИЕ 5");
/*В документе html реализовать слайдер.
Для реализации слайдера вам понадобится массив слайдов внутри слайдера 
(querySelectorAll), две кнопки (getElementById) для переключения между следующим и предыдущим слайдами.
Объявите переменные для текущего индекса слайда и предыдущего.
Создайте функцию для смены слайда. Ее можно реализовать с помощью добавления класса, 
который отвечает за отображение элемента, к элементу с текущим индексом 
и удалением аналогичного класса у предыдущего. Остальные слайды можно скрыть через display: none
Создайте функции для изменения индексов. Также не забудьте добавить 
проверку граничных случаев, когда индекс станет больше 
длины массива или меньше 0. В них же можно вызывать функцию для смены слайда.
Добавьте обработку событий клика на кнопки.
Приветствуются альтернативные варианты решения этой задачи.*/


let Image = document.getElementsByClassName("images");
let indexImg=0;
let ButtonLeft = document.getElementById("buttonLeft");
let ButtonRight = document.getElementById("buttonRight");
ButtonLeft.addEventListener("click", LastImg);
ButtonRight.addEventListener("click", NextImg);


for (let n = 1; n < Image.length; n++){
    Image[n].style = "display: none";
}

function LastImg() {
    if (indexImg-1 < 0) {
        Image[indexImg].style.display = "none";
        indexImg = Image.length - 1;
        Image[indexImg].style.display = "inline";
    }
    else {
        Image[indexImg].style.display = "none";
        indexImg -= 1;
        Image[indexImg].style.display = "inline";
    }
}

function NextImg(){
    if (indexImg +1 >= Image.length) {
        Image[indexImg].style.display = 'none';
        indexImg = 0;
        Image[indexImg].style.display = 'inline';
    }
    else {
        Image[indexImg].style.display = 'none';
        indexImg += 1;
        Image[indexImg].style.display = 'inline';
    }
}
