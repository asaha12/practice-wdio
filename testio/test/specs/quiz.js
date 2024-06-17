describe("Quiz",()=>{

    it("Go to herokuapp add or remove element page", async()=>{
    await browser.url("https://the-internet.herokuapp.com/add_remove_elements/");
    await browser.pause(3000);
})

    it("Click on the add element button 10 times", async()=>{

        const addButton = await $("button[onclick='addElement()']");
        for (let i = 0; i < 10; i++) {
            await addButton.click();
        }
        await browser.pause(2000);
    })

    it("Delete the 5th position Delete button", async()=>{

        const deleteButton = await $$('//button[@class="added-manually"]')[4];
        await deleteButton.click();
        await browser.pause(3000);
    })


})