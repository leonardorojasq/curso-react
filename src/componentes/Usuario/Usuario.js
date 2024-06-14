export const Usuario = (props) => {
    console.log(props)

    const {nombre, edad, nacionalidad } = props

    return <div>
      <h1>{nombre}</h1>
      <p>{edad}</p>
      <p>{nacionalidad}</p>
      <hr />
    </div>
  }

  