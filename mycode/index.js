function hello () {
    setTimeout(() => {
        console.loh("hello from docker node");
        hello();
    }, 1000);
}

hello();