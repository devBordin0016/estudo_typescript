namespace casting {
    let idade: any = 25;
    (idade as number).toFixed();
    (idade as string).length;
    (idade as string[]).forEach(x => {
        console.log(x);
    })

    // maneira para converter tipos de variaveis
    let nome: string = 35 as unknown as string;
}