import React, {useState} from 'react';
import { ErrorMessage, Formik, Form, Field } from 'formik';


const Formulario = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
	return (
		<>
			<Formik
			//Valores iniciales
				initialValues={{
					nombre: '',
					apellido: '',
					genero: '',
					correo: ''
				}}
					//validación de ingreso de datos para el nombre
					validate={(valores) => {

					let errores = {};
					//Mensaje de diligenciamiento al nombre, validando con expresion regular
					if(!valores.nombre){
						errores.nombre = 'Por favor ingrese su nombre'	
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
						errores.nombre = 'El nombre solo puede contener letras y espacios'
					}

					//Mensaje de diligenciamiento al correo, validando con expresion regular
					if(!valores.correo){
						errores.correo = 'Ingrese por favor su correo'	
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
						errores.correo = 'El correo no es valido'
					}				

					return errores;
				}}//enviar formulario
				onSubmit={(valores, {resetForm}) => {
					//Respuesta de los valores enviados
					//console.log(valores);

					//limpiar formulario
					resetForm();

					//funcion de respuesta una vez enviado el formulario
					console.log('Usuario Registrado');

					cambiarFormularioEnviado(true);
					setTimeout(() => cambiarFormularioEnviado(false), 2000);
				}}
			>
				{( { errors} ) => ( 		//funcion que permite intyectar errores
											//propiedades del objeto
											//handleSubmit funcion que me permite enviar el formulario
											//values podemos acceder a valores	del formulario, definidos en initialValues
					<Form action=""  className="formulario">
						<div>
							<label htmlFor="nombre">Nombre</label>
							<Field //value={values.nombre} onChange={handleChange} onBlur={handleBlur}
								type="text"
								name="nombre"
								placeholder="Nombre"
								id="nombre"
							/>
							<ErrorMessage name="nombre" component={() => (
								<div className='error'>{errors.nombre}</div>
							)}/>
						</div>

						<div>
							<label htmlFor="Apellido">Apellido</label>
							<Field //value={values.nombre} onChange={handleChange} onBlur={handleBlur}
								type="text"
								name="Apellido"
								placeholder="Apellido"
								id="Apellido"
							/>
							<ErrorMessage name="nombre" component={() => (
								<div className='error'>{errors.nombre}</div>
							)}/>							
						</div>

						<div>
							<label htmlFor="Telefono">Telefono</label>
							<Field //value={values.nombre} onChange={handleChange} onBlur={handleBlur}
								type="text"
								name="Telefono"
								placeholder="Telefono"
								id="Telefono"
							/>
						</div>
						
						<div>
							<label htmlFor="correo">Correo</label>
							<Field //permite enviar las funciones value={values.correo} onChange={handleChange} onBlur={handleBlur}
								type="correo"
								name="correo"
								placeholder="Correo"
								id="correo"
							/>
							<ErrorMessage name="correo" component={() => (
								<div className='error'>{errors.nombre}</div>
							)}/>					
						</div>
						<button type="submit">Guardar</button>
						{formularioEnviado && <p className="exito">Guardado con Exito</p>}
					</Form>
				)}



{/* {( {values, errors, touched, handleSubmit, handleChange, handleBlur} ) => ( //propiedades del objeto
											//handleSubmit funcion que me permite enviar el formulario
											 //values podemos acceder a valores	del formulario, definidos en initialValues
					<form action=""  className="formulario" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="nombre">Nombre</label>
					<input
						type="text"
						name="nombre"
						placeholder="Nombre"
						id="nombre"
						value={values.nombre}
						onChange={handleChange} 
						onBlur={handleBlur}
					/>
					{touched.nombre && errors.nombre && <div className='error'>{errors.nombre}</div>}
				</div>

				<div>
					<label htmlFor="correo">Correo</label>
					<input
						type="text"
						name="correo"
						placeholder="Correo"
						id="correo"
						value={values.correo}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{touched.correo  && errors.correo && <div className='error'>{errors.correo}</div>}
				</div>
						<button type="submit">Guardar</button>
						{formularioEnviado && <p className="exito">Guardado con Exito</p>}
					</form>
				)} */}

			</Formik>
		</>
	);

}
 
export default Formulario;