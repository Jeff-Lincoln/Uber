import React, { useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { selectDestination, selectOrigin } from '../slices/navSlice';
import { useSelector } from 'react-redux';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_APIKEY } from '@env';

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!origin || !destination) return;

    // Zoom and fit
    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);

  useEffect(() => {
    const getTravelTime = async () => {
      try {
        if (!origin || !destination) return;

        const response = await fetch(
          `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destination=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`
        );

        if (!response.ok) {
          console.error('Error fetching travel time:', response.status);
          return;
        }

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching travel time:', error);
      }
    };

    getTravelTime();
  }, [origin, destination, GOOGLE_MAPS_APIKEY]);

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin?.location.lat || 0,
        longitude: origin?.location.lng || 0,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="black"
        />
      )}

      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
        />
      )}

      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination.description}
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});



// import React, { useEffect, useRef } from 'react';
// import { StyleSheet } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import tw from 'tailwind-react-native-classnames';
// import { selectDestination, selectOrigin } from '../slices/navSlice';
// import { useSelector } from 'react-redux';
// import MapViewDirections from 'react-native-maps-directions';
// import { GOOGLE_MAPS_APIKEY } from '@env';

// const Map = () => {
//   const origin = useSelector(selectOrigin);
//   const destination = useSelector(selectDestination);
//   const mapRef = useRef(null);

//   useEffect(() => {
//     if (!origin || !destination) return;

//     // Zoom and fit
//     mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
//       edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
//     });
//   }, [origin, destination]);

//   useEffect(() => {
//     if (!origin || !destination) return;

//     const getTravelTime = async () => {
//       try {
//         const response = await fetch(
//           `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destination=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`
//         );
//         const data = await response.json();
//         console.log(data);
//       } catch (error) {
//         console.error('Error fetching travel time:', error);
//       }
//     };

//     getTravelTime();
//   }, [origin, destination, GOOGLE_MAPS_APIKEY]);


//   // useEffect(() => {
//   // if(!origin || !destination) return;
//   //   const getTravelTime = async() => {
//   //     fetch(`https://maps.googleapis.com/maps/api/distancematrix/json
//   //     ?&origins=${origin.description}
//   //     &destination=${destination.description}
//   //     &units=imperial
//   //     &key=${GOOGLE_MAPS_APIKEY}`)
//   //     .then((res) => res.json())
//   //     .then(data => {
//   //       console.log(data);
//   //     })
//   //   };
//   //   getTravelTime();
//   // }, [origin, destination, GOOGLE_MAPS_APIKEY])

//   // useEffect(() => {
//   //   const getTravelTime = async () => {
//   //     try {
//   //       if (!origin || !destination) return;

//   //       const response = await fetch(
//   //         `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destination=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`
//   //       );

//   //       if (response.ok) {
//   //         const data = await response.json();
//   //         console.log(data);
//   //       } else {
//   //         console.error('Error fetching travel time:', response.status);
//   //       }
//   //     } catch (error) {
//   //       console.error('Error fetching travel time:', error);
//   //     }
//   //   };

//   //   getTravelTime();
//   // }, [origin, destination, GOOGLE_MAPS_APIKEY]);

//   return (
//     <MapView
//       ref={mapRef}
//       style={tw`flex-1`}
//       mapType="mutedStandard"
//       initialRegion={{
//         latitude: origin?.location.lat || 0,
//         longitude: origin?.location.lng || 0,
//         latitudeDelta: 0.005,
//         longitudeDelta: 0.005,
//       }}
//     >
//       {origin && destination && (
//         <MapViewDirections
//           origin={origin.description}
//           destination={destination.description}
//           apikey={GOOGLE_MAPS_APIKEY}
//           strokeWidth={3}
//           strokeColor="black"
//         />
//       )}

//       {origin?.location && (
//         <Marker
//           coordinate={{
//             latitude: origin.location.lat,
//             longitude: origin.location.lng,
//           }}
//           title="Origin"
//           description={origin.description}
//           identifier="origin"
//         />
//       )}

//       {destination?.location && (
//         <Marker
//           coordinate={{
//             latitude: destination.location.lat,
//             longitude: destination.location.lng,
//           }}
//           title="Destination"
//           description={destination.description}
//           identifier="destination"
//         />
//       )}
//     </MapView>
//   );
// };

// export default Map;

// const styles = StyleSheet.create({});



// // import React, { useEffect, useRef } from 'react';
// // import { StyleSheet } from 'react-native';
// // import MapView, { Marker } from 'react-native-maps';
// // import tw from 'tailwind-react-native-classnames';
// // import { selectDestination, selectOrigin } from '../slices/navSlice';
// // import { useSelector } from 'react-redux';
// // import MapViewDirections from 'react-native-maps-directions';
// // import { GOOGLE_MAPS_APIKEY } from '@env';

// // const Map = () => {
// //   const origin = useSelector(selectOrigin);
// //   const destination = useSelector(selectDestination);
// //   const mapRef = useRef(null);

// //   useEffect(() => {
// //     if (!origin || !destination) return;

// //     // Zoom and fit
// //     mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
// //       edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
// //     });
// //   }, [origin, destination]);

// //   useEffect(() => {
// //     if (!origin || !destination) return;

// //     const getTravelTime = async () => {
// //       try {
// //         const response = await fetch(
// //           `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destination=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`
// //         );
// //         const data = await response.json();
// //         console.log(data);
// //       } catch (error) {
// //         console.error('Error fetching travel time:', error);
// //       }
// //     };

// //     getTravelTime();
// //   }, [origin, destination, GOOGLE_MAPS_APIKEY]);

// //   return (
// //     <MapView
// //       ref={mapRef}
// //       style={tw`flex-1`}
// //       mapType="mutedStandard"
// //       initialRegion={{
// //         latitude: origin.location.lat,
// //         longitude: origin.location.lng,
// //         latitudeDelta: 0.005,
// //         longitudeDelta: 0.005,
// //       }}
// //     >
// //       {origin && destination && (
// //         <MapViewDirections
// //           origin={origin.description}
// //           destination={destination.description}
// //           apikey={GOOGLE_MAPS_APIKEY}
// //           strokeWidth={3}
// //           strokeColor="black"
// //         />
// //       )}

// //       {origin?.location && (
// //         <Marker
// //           coordinate={{
// //             latitude: origin.location.lat,
// //             longitude: origin.location.lng,
// //           }}
// //           title="Origin"
// //           description={origin.description}
// //           identifier="origin"
// //         />
// //       )}

// //       {destination?.location && (
// //         <Marker
// //           coordinate={{
// //             latitude: destination.location.lat,
// //             longitude: destination.location.lng,
// //           }}
// //           title="Destination"
// //           description={destination.description}
// //           identifier="destination"
// //         />
// //       )}
// //     </MapView>
// //   );
// // };

// // export default Map;

// // const styles = StyleSheet.create({});
