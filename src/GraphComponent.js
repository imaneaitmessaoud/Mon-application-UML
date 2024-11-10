import React, { useEffect } from 'react';

const GraphComponent = () => {
    useEffect(() => {
        const container = document.getElementById('graphContainer');

        // Vérifiez que mxGraph est bien chargé depuis le CDN
        if (window.mxGraph && container) {
            const graph = new window.mxGraph(container);

            // Permet le zoom avec la molette de la souris
            new window.mxRubberband(graph);

            // Crée des cellules pour le graphe
            const parent = graph.getDefaultParent();
            graph.getModel().beginUpdate();
            try {
                const v1 = graph.insertVertex(parent, null, 'commande', 20, 20, 80, 30);
                const v2 = graph.insertVertex(parent, null, 'produit', 200, 150, 80, 30);
               // const v3 = graph.insertVertex(parent, null, 'qantite', 20, 20, 80, 30);
                graph.insertEdge(parent, null, '', v1, v2);
            } finally {
                graph.getModel().endUpdate();
            }

            // Empêche la sélection des cellules avec un double-clic
            window.mxEvent.disableContextMenu(container);
        } else {
            console.error("mxGraph n'a pas été chargé correctement.");
        }
    }, []);

    return <div id="graphContainer" style={{ width: '100%', height: '400px', border: '1px solid black' }}></div>;
};

export default GraphComponent;
