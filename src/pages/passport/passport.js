import React, { useState, useRef, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";
import { lineString as makeLineString } from '@turf/helpers';

import styles from './styles';

const accessToken = "pk.eyJ1IjoiY2FuZGVyYTMzM2UiLCJhIjoiY2twZDFpc25lMWJncDJ4b2Z4dXBmamU5YyJ9.uH9Rt7bkIo9Kb7fbxINNiw";
MapboxGL.setAccessToken(accessToken);

const Passport = (props) => {
    const points = [
        [3.3362400, 6.5790100],
        [3.3750014, 16.5367877],
        [13.3750014, 16.5367877]
    ];
    const startingPoint = points[0];
    const newRoute = makeLineString(points);
    const [route, setRoute] = useState(newRoute);
    const [camera, setCamera] = useState(null);

    useEffect(() => {
        const bounds = getBoundingBox(points);
        if (bounds?.southWest && bounds?.northEast) {
            camera?.fitBounds(bounds.northEast, bounds.southWest, 15, 500);
        }
    }, [camera]);

    const getBoundingBox = (pointList) => {
        var bounds = {}, coords, point, latitude, longitude;
      
        for (var i = 0; i < pointList.length; i++) {
            coords = pointList[i];
            longitude = coords[0];
            latitude = coords[1];
            bounds.xMin = bounds.xMin < longitude ? bounds.xMin : longitude;
            bounds.xMax = bounds.xMax > longitude ? bounds.xMax : longitude;
            bounds.yMin = bounds.yMin < latitude ? bounds.yMin : latitude;
            bounds.yMax = bounds.yMax > latitude ? bounds.yMax : latitude;
        }
        return {
            northEast: [bounds.xMax, bounds.yMin],
            southWest: [bounds.xMin, bounds.yMax]
        };
    }

    const renderAnnotations = () => {
        return (
            points.map((point, index) => (
                <MapboxGL.PointAnnotation
                    key={`${index}-PointAnnotation`}
                    id={`${index}-PointAnnotation`}
                    coordinate={point}>
                    <View style={{
                        height: 22,
                        width: 22,
                        backgroundColor: '#0011ff',
                        borderRadius: 50,
                        borderColor: '#ffffff',
                        borderWidth: 3
                    }}
                    />
                </MapboxGL.PointAnnotation>
            ))
        );
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <Text>Name: XXXXX XXXX XXXXID</Text>
                </View>

                <View style={styles.formContainer}>
                    <Text>Number: 123456789</Text>
                </View>

                <View style={styles.formContainer}>
                    <Text>Birthday: Month/Day/Year</Text>
                </View>

                <View style={styles.formContainer}>
                    <Text>Retirement: </Text>
                </View>

                <View style={styles.formContainer}>
                    <View style={styles.mapContainer}>
                        <MapboxGL.MapView
                            style={styles.map}
                            zoomLevel={16}
                            centerCoordinate={startingPoint}
                        >
                            <MapboxGL.Camera
                                ref={c => setCamera(c)}
                                zoomLevel={16}
                                centerCoordinate={startingPoint}
                                animationMode={'flyTo'}
                                animationDuration={10}
                            >
                            </MapboxGL.Camera>

                            {renderAnnotations()}

                            {
                                route && (
                                    <MapboxGL.ShapeSource id='shapeSource' shape={route}>
                                        <MapboxGL.LineLayer id='lineLayer' style={{ lineWidth: 5, lineJoin: 'bevel', lineColor: '#ff0000' }} />
                                    </MapboxGL.ShapeSource>
                                )
                            }
                        </MapboxGL.MapView>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default Passport;