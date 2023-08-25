
export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime, 
      date: new Date().toDateString(),
      text: 'lorem texto generado de forma automatica para que no digan que no puse nada',
      picture: null
    },
    {
      id: new Date().getTime + 1000, 
      date: new Date().toDateString(),
      text: 'texto difernete al de arriba texto generado de forma automatica para que no digan que no puse nada',
      picture: null
    },
    {
      id: new Date().getTime + 2000, 
      date: new Date().toDateString(),
      text: 'tercer texto para que no digan que no hice modificación texto generado de forma automatica para que no digan que no puse nada',
      picture: null
    }
  ],
});

