/**
 * Multilayer sample
 */
this.default = function () {
    var maps = new ej.maps.Maps({
        load: function (args) {
            var theme = location.hash.split('/')[1];
            theme = theme ? theme : 'Material';
            args.maps.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));
        },
        zoomSettings: {
            enable: true,
            pinchZooming: true
        },
        titleSettings: {
            text: 'Samsung Semiconductor office locations in USA',
            textStyle: {
                size: '16px'
            }
        },
        layers: [
            {
                shapeData: window.USA ,
                shapeSettings: {
                    fill: '#E5E5E5',
                    border: {
                        color: 'black',
                        width: 0.1
                    }
                },
                dataLabelSettings: {
                    visible: true,
                    labelPath: 'iso_3166_2',
                    smartLabelMode: 'Hide'
                }
            },
            {
                shapeData: window.Texas,
                type: 'SubLayer',
                shapeSettings: {
                    fill: 'rgba(141, 206, 255, 0.6)',
                    border: {
                        color: '#1a9cff',
                        width: 0.25
                    }
                },
                markerSettings: [
                    {
                        visible: true,
                        width: 20,
                        height: 20,
                        template: '#markercircle',
                        dataSource: [
                            {
                                latitude: 30.267153,
                                longitude: -97.7430608,
                                name: 'Austin'
                            }
                        ],
                        tooltipSettings: {
                            visible: true,
                            valuePath: 'name',
                            format: '<b>${name}</b><br>Manufacturing Center,<br>Research and Development Center'
                        }
                    },
                    {
                        visible: true,
                        dataSource: [
                            {
                                latitude: 31.80289258670676,
                                longitude: -98.96484375
                            }
                        ],
                        template: '<div>TX</div>'
                    }
                ]
            },
            {
                shapeData: window.California,
                type: 'SubLayer',
                shapeSettings: {
                    fill: 'rgba(141, 206, 255, 0.6)',
                    border: {
                        color: '#1a9cff',
                        width: 0.25
                    }
                },
                markerSettings: [
                    {
                        visible: true,
                        width: 20,
                        height: 20,
                        dataSource: [
                            {
                                latitude: 37.3382082,
                                longitude: -121.8863286,
                                name: 'San Jose'
                            }
                        ],
                        tooltipSettings: {
                            visible: true,
                            valuePath: 'name',
                            format: '<b>${name}</b><br>Regional Office,<br>Research and Development Center'
                        },
                        template: '#markercircle'
                    },
                    {
                        visible: true,
                        dataSource: [
                            {
                                latitude: 37.09023980307208,
                                longitude: -119.35546875000001
                            }
                        ],
                        template: '<div>CA</div>'
                    }
                ]
            }
        ]
    });
    maps.appendTo('#container');
};