import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const data = [
  {
    id: 'Uber-X-123',
    title: 'UberX',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn',
  },
  {
    id: 'Uber-X-456',
    title: 'UberXL',
    multiplier: 1.2,
    image: 'https://links.papareact.com/5w8',
  },
  {
    id: 'Uber-LUX-789',
    title: 'UberLUX',
    multiplier: 1.5,
    image: 'https://links.papareact.com/7pf',
  },
];

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={tw`absolute top-3 left-5 p-3 rounded-full`}
      >
        <Icon name="chevron-left" type="font-awesome" />
      </TouchableOpacity>

      <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row justify-between items-center px-10 ${
              item.id === selected?.id && 'bg-gray-200'
            }`}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
              }}
              source={{ uri: item.image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{item.title}</Text>
              <Text>Travel time...</Text>
            </View>
            <Text style={tw`text-xl`}>$99</Text>
          </TouchableOpacity>
        )}
      />

      <View style={tw`flex-grow justify-end`}>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});


// import React from 'react';
// import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import tw from 'tailwind-react-native-classnames';
// import { Icon } from 'react-native-elements';
// import { Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { useState } from 'react';

// const data = [
//   {
//     id: 'Uber-X-123',
//     title: 'UberX',
//     multiplier: 1,
//     image: 'https://links.papareact.com/3pn',
//   },
//   {
//     id: 'Uber-X-456',
//     title: 'UberXL',
//     multiplier: 1.2,
//     image: 'https://links.papareact.com/5w8',
//   },
//   {
//     id: 'Uber-LUX-789',
//     title: 'UberLUX', // Corrected title to 'UberLUX'
//     multiplier: 1.5,
//     image: 'https://links.papareact.com/7pf',
//   },
// ];

// const RideOptionsCard = () => {
//   const navigation = useNavigation();
//   const [selected, setSelected] = useState(null);

//   return (
//     <SafeAreaView style={tw`bg-white flex-grow`}>
//       <View>
//         <TouchableOpacity
//           onPress={() => navigation.goBack()}
//           style={tw`absolute top-3 left-5 p-3 rounded-full`}
//         >
//           <Icon name="chevron-left" type="font-awesome" />
//         </TouchableOpacity>
//         <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>

//         <FlatList
//           data={data}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               onPress={() => setSelected(item)}
//               style={tw`flex-row justify-between items-center px-10 ${
//                 item.id === selected?.id && 'bg-gray-200'
//               }`}
//             >
//               <Image
//                 style={{
//                   width: 100,
//                   height: 100,
//                   resizeMode: 'contain',
//                 }}
//                 source={{ uri: item.image }}
//               />
//               <View style={tw`-ml-6`}>
//                 <Text style={tw`text-xl font-semibold`}>{item.title}</Text>
//                 <Text>Travel time...</Text>
//               </View>
//               <Text style={tw`text-xl`}>$99</Text>
//             </TouchableOpacity>
//           )}
//         />

//         <View>
//           <TouchableOpacity
//             disabled={!selected}
//             style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}
//           >
//             <Text style={tw`text-center text-white text-xl`}>
//               Choose {selected?.title}
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default RideOptionsCard;

// const styles = StyleSheet.create({});


// // import React from 'react';
// // import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// // import { SafeAreaView } from 'react-native-safe-area-context';
// // import tw from 'tailwind-react-native-classnames';
// // import { Icon } from 'react-native-elements';
// // import { Image } from 'react-native';
// // import { useNavigation } from '@react-navigation/native';
// // import { useState } from 'react';

// // const data = [
// //   {
// //     id: "Uber-X-123",
// //     title: "UberX",
// //     multiplier: 1,
// //     image: "https://links.papareact.com/3pn"
// //   },
// //   {
// //     id: "Uber-X-456",
// //     title: "UberXL",
// //     multiplier: 1.2,
// //     image: "https://links.papareact.com/5w8"
// //   },
// //   {
// //     id: "Uber-LUX-789",
// //     title: "UberX",
// //     multiplier: 1.5,
// //     image: "https://links.papareact.com/7pf",
// //   },
// // ];

// // const RideOptionsCard = () => {
// //   const navigation = useNavigation();
// //   const [selected, setSelected] = useState(null);

// //   return (
// //     <SafeAreaView style={tw`bg-white flex-grow`}>
// //       <View>
// //       <TouchableOpacity
// //       onPress={() => navigation.goBack()}
// //       style={tw`absolute top-3 left-5 p-3 rounded-full`}>
// //       <Icon name="chevron-left" type="font-awesome" />
// //       </TouchableOpacity>
// //         {/* <TouchableOpacity
// //           onPress={() => navigation.navigate('NavigateCard')}
// //           style={tw`absolute top-3 left-5 p-3 rounded-full`}>
// //           <Icon name="chevron-left" type="font-awesome" />
// //         </TouchableOpacity> */}
// //         <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
// //         {/* Additional content for the RideOptionsCard component */}

// //         <FlatList 
// //         data={data}
// //         keyExtractor={(item) => item.id}
// //         renderItem={({ item: { id, title, multiplier, image }, item}) => (
// //           <TouchableOpacity 
// //           onPress={() => setSelected(item)}
// //           style={tw`flex-row justify-between items-center px-10 ${id ===
// //            selected?.id && "bg-gray-200"
// //            }`}>
// //             <Image 
// //             style={{
// //               width: 100,
// //               height: 100,
// //               resizeMode: "contain",
// //             }}
// //             source={{ uri: image }}
// //             />
// //             <View style={tw`-ml-6`}>
// //               <Text style={tw`text-xl font-semibold`}>{title}</Text>
// //               <Text>Travel time...</Text>
// //             </View>
// //             <Text style={tw`text-xl`}>$99</Text>
// //           </TouchableOpacity>
// //         )}
// //         />
// //         <View>
// //           <TouchableOpacity disabled={!selected}
// //           style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
// //           >
// //             <Text
// //             style={tw`text-center text-white text-xl`}
// //             >Choose {selected?.title}</Text>
// //           </TouchableOpacity>
// //         </View>
// //       </View>
// //     </SafeAreaView>
// //   );
// // };

// // export default RideOptionsCard;

// // const styles = StyleSheet.create({});

