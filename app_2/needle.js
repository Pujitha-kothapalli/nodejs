var nd = require('needle')

// var url = "https://jsonplaceholder.typicode.com/todos/1"
// nd.get(url,(err,respond,body)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(body)
//     }
// })

// var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=fd0a1ba7e7be85dd3353140c307e0178&language=en-US&page=1"

// nd.get(url,(err,respond,body)=>{

//         if(err){
//              console.log(err)
//      }
//    else{
//          console.log(body)
//      }
//  })

// var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=fd0a1ba7e7be85dd3353140c307e0178&language=en-US&page=1"

// nd.get(url,(err,respond,body)=>{

//         if(err){
//              console.log(err)
//      }
//    else{
//          var results = body.results
//          for(ele in results)
//             console.log(results[ele].title)
//      }
//  })

// var url = "https://api.mapbox.com/geocoding/v5/mapbox.places/San%20Francisco.json?access_token=pk.eyJ1IjoicHVqaXRoYS0xIiwiYSI6ImNsM28wb2xrZjA0cnAzY21yZDQ3aHA1NzAifQ.CfkmkhxCHP4uHdoF51T_Ow"

// nd.get(url,(err,respond,body)=>{

//     if(err){
//          console.log(err)
//      }
//    else{
//     console.log(JSON.parse(body))
//      }
//  })

// var ur = "http://api.weatherstack.com/current?access_key=1e6259e3aee3bda6a3575cc808d62415&query=bhimavaram"

// nd.get(ur,(err,respond,body)=>{

//     if(err){
//          console.log(err)
//      }
//    else{
//     console.log(body)
//      }
//  })

// var ur = "http://api.weatherstack.com/current?access_key=1e6259e3aee3bda6a3575cc808d62415&query=bhimavaram"

// nd.get(ur,(err,respond,body)=>{

//     if(err){
//          console.log(err)
//      }
//    else{
//     console.log(body.current.temperature)
//     var desc = body.current.weather_descriptions
//     for(ele in desc){
//         console.log(desc[ele])
//     }
//     }
//  })

var ur = "http://api.weatherstack.com/current?access_key=1e6259e3aee3bda6a3575cc808d62415&query=bhimavaram"

nd.get(ur,(err,respond,body)=>{

    if(err){
         console.log(err)
     }
   else{
    console.log(body.current.temperature)
    console.log(body.location.lat)
    console.log(body.location.lon)
    var desc = body.current.weather_descriptions
    for(ele in desc){
        console.log(desc[ele])
    }
    }
 })