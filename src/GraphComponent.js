import React, { useEffect } from 'react';

const GraphComponent = () => {
    useEffect(() => {
        const container = document.getElementById('graphContainer');

        if (window.mxGraph && container) {
            const graph = new window.mxGraph(container);
            new window.mxRubberband(graph);

            // Gérer l'événement de dépôt
            container.addEventListener('dragover', (event) => {
                event.preventDefault(); // Autorise le dépôt
            });

            container.addEventListener('drop', (event) => {
                event.preventDefault();
                const elementType = event.dataTransfer.getData('elementType');
                const parent = graph.getDefaultParent();
                const x = event.offsetX;
                const y = event.offsetY;

                graph.getModel().beginUpdate();
                try {
                    if (elementType === 'class') {
                        graph.insertVertex(parent, null, 'Classe', x, y, 80, 30);
                    } else if (elementType === 'interface') {
                        graph.insertVertex(parent, null, 'Interface', x, y, 80, 30);
                    } else if (elementType === 'entity') {
                        graph.insertVertex(parent, null, 'Entité', x, y, 80, 30);
                    }
                } finally {
                    graph.getModel().endUpdate();
                }
            });

            window.mxEvent.disableContextMenu(container);
        } else {
            console.error("mxGraph n'a pas été chargé correctement.");
        }
    }, []);

    return <div id="graphContainer" style={{ width: '100%', height: '400px', border: '1px solid black' }}></div>;
};

export default GraphComponent;
