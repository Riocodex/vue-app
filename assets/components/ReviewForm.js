app.component('review-form',{
    template:
        `<form class="review-form">
            <h3>Leave a review</h3>
            <label for="name"<Name: </label>
        <input id ="name">
        <textarea id="review"></textarea>

        <select id="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>

        <input class="button" type="submit" value="Submit">
        </form>
        `
})