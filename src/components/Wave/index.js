// import Svg, {
//   Circle,
//   Ellipse,
//   G,
//   Text,
//   TSpan,
//   TextPath,
//   Path,
//   Polygon,
//   Polyline,
//   Line,
//   Rect,
//   Use,
//   Image,
//   Symbol,
//   Defs,
//   LinearGradient,
//   RadialGradient,
//   Stop,
//   ClipPath,
//   Pattern,
//   Mask
// } from "react-native-svg";

// /* Use this if you are using Expo
// import { Svg } from 'expo';
// const { Circle, Rect } = Svg;
// */

// import React from "react";
// import { View, StyleSheet, Dimensions } from "react-native";
// import * as d3 from "d3-shape";
// // Percentages work in plain react-native but aren't supported in Expo yet, workaround with this or onLayout
// const { width, height } = Dimensions.get("window");

// export default class SvgExample extends React.Component {
//   render() {
//     var arc = d3
//       .arc()
//       .innerRadius(0)
//       .outerRadius(10)
//       .startAngle(0)
//       .endAngle(Math.PI / 2);
//     var line = d3.line();
//     var points = [[0, 80], [100, 100]];
//     // var qwe = line({ date: new Date(2007, 3, 24), value: 93.24 });
//     // var asd = arc();
//     console.log("123456>>>", line(points));
//     return (
//       <View
//         style={[
//           StyleSheet.absoluteFill,
//           { alignItems: "center", justifyContent: "center" }
//         ]}
//       >
//         <Svg height={height * 0.5} width={width * 0.5} viewBox="0 0 100 100">
//           <Circle
//             cx="50"
//             cy="50"
//             r="45"
//             stroke="blue"
//             strokeWidth="2.5"
//             fill="green"
//           />
//           <Path
//             onPress={() => {
//               if (typeof onPress === "function") {
//                 onPress();
//               }
//             }}
//             // fill="green"
//             d={line(points)}
//           />
//           <Rect
//             x="15"
//             y="15"
//             width="70"
//             height="70"
//             stroke="red"
//             strokeWidth="2"
//             fill="yellow"
//           />
//         </Svg>
//       </View>
//     );
//   }
// }
