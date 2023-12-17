# Getting Started with Facebook Images Layout

Facebook-images-layout library which displays them in beautiful grids , inspired from facebook

# Table of contents

1. [Installation](#installation)
2. [Demo](#demo)
3. [Basic Usage](#basic-usage)

# Installation

- Using NPM
  `npm i facebook-image-layout`

# Demo

## can layout different number of images

| Base Case                                                                                                             | One Image                                                                                                             | Two Images                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| <img src="https://i.pinimg.com/originals/3d/cd/57/3dcd5784293d23797383f7c31ada3f3f.jpg" alt="base case" width="400"/> | <img src="https://i.pinimg.com/originals/9a/25/f2/9a25f264642c532a0f46e1e19b0bcb14.jpg" alt="one image" width="400"/> | <img src="https://i.pinimg.com/originals/69/7b/1c/697b1cd5ce06199f77586e65c68fc154.jpg" alt="Two Imgs" width="400"/> |

| Three Images                                                                                                           | Four images                                                                                                             | Five Images                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| <img src="https://i.pinimg.com/originals/0c/3d/9d/0c3d9dc2e247b248388e6fcc17da5be7.jpg" alt="three imgs" width="400"/> | <img src="https://i.pinimg.com/originals/5f/6e/67/5f6e67d1267a1cd1edae67f20b1dfa0b.jpg" alt="four images" width="400"/> | <img src="https://i.pinimg.com/originals/71/f8/86/71f886bac9b735d6c770c82ef0b421da.jpg" alt="Five images" width="400"/> |

## Story interactions

![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXhtbGQ2a29zdXFsaWM1b3pvbjZqdDAyeGU3Nzh1NzNnYWp1aXMyaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nmqMeymUfZrAXVMkKr/giphy.gif)

## Demo Carousel

![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDY2aGxzMjZyN3JuYjZxYnNteXZzZzl1ZWl1eGY4ZmM1dTZyOW8xZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UDCvtPfAFTQP4Osehc/giphy.gif)

# Basic Usage of Image Grid

- For image grid of 1 image with modal

  ```
  import {ImageGridComponent} from "facebook-image-layout";

  function App() {
    return (
        <ImageGridComponent
          images={[
            {
              alt: 'a person standing in a canyon surrounded by rocks',
              url: 'https://images.unsplash.com/photo-1682695794816-7b9da18ed470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDk3MzJ8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwMjc5OTQwMnw&ixlib=rb-4.0.3&q=80&w=1080'
            },
          ]}
          imagesGridHeight="20rem"
          imagesGridMaxWidth="30rem"
        />
    );
  }

  export default App;
  ```

- For image grid of more than 5 images with modal

  ```
  import {ImageGridComponent} from "facebook-image-layout";

  function App() {
    return (
        <ImageGridComponent
          images={[
            {
              alt: 'a person standing in a canyon surrounded by rocks',
              url: 'https://images.unsplash.com/photo-1682695794816-7b9da18ed470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDk3MzJ8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwMjc5OTQwMnw&ixlib=rb-4.0.3&q=80&w=1080'
            },
            {
              alt: 'a woman holding an umbrella in a forest',
              url: 'https://images.unsplash.com/photo-1702700485044-652cbbd41fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDk3MzJ8MHwxfGFsbHwyfHx8fHx8Mnx8MTcwMjc5OTQwMnw&ixlib=rb-4.0.3&q=80&w=1080'
            },
            {
              alt: 'a forest covered in lots of trees under a cloudy sky',
              url: 'https://images.unsplash.com/photo-1702659610398-58d3fb3f65f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDk3MzJ8MHwxfGFsbHwzfHx8fHx8Mnx8MTcwMjc5OTQwMnw&ixlib=rb-4.0.3&q=80&w=1080'
            },
            {
              alt: 'a black and brown dog standing in the snow',
              url: 'https://images.unsplash.com/photo-1702611120121-e03dafc14150?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDk3MzJ8MHwxfGFsbHw0fHx8fHx8Mnx8MTcwMjc5OTQwMnw&ixlib=rb-4.0.3&q=80&w=1080'
            },
            {
              alt: 'two white plates topped with chocolate cake on top of a table',
              url: 'https://images.unsplash.com/photo-1702323213406-db43f134bd80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDk3MzJ8MHwxfGFsbHw1fHx8fHx8Mnx8MTcwMjc5OTQwMnw&ixlib=rb-4.0.3&q=80&w=1080'
            },
            {
              alt: 'a couple of animals standing on top of a rocky hillside',
              url: 'https://images.unsplash.com/photo-1682687221213-56e250b36fdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDk3MzJ8MXwxfGFsbHw2fHx8fHx8Mnx8MTcwMjc5OTQwMnw&ixlib=rb-4.0.3&q=80&w=1080'
            },
          ]}
          imagesGridHeight="20rem"
          imagesGridMaxWidth="30rem"
        />
    );
  }

  export default App;
  ```

# props

| Accepted props     | type                                    | Description                                   |
| ------------------ | --------------------------------------- | --------------------------------------------- |
| imagesGridMaxWidth | string                                  | set maximum Width for Image Grid Component    |
| imagesGridHeight   | string                                  | set height for Image Grid Component           |
| images             | ImageFormat[{alt: string, url: string}] | List of Image Object with property: alt & url |
