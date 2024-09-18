import React, { useState, useRef } from "react";
import { Stage, Layer, Line, Rect, Circle, Text, Image as KonvaImage, Image } from "react-konva";
import useImage from "use-image";
import { AiOutlineUndo, AiOutlineSave } from "react-icons/ai";
import { FaBrush, FaSquare, FaRegDotCircle, FaTimes } from "react-icons/fa";
import image1 from "./istockphoto-903309398-612x612.jpg"

const CanvasComponent: React.FC = () => {
    const [tool, setTool] = useState<"line" | "area" | "count" | "icon" | null>(null);
    const [lines, setLines] = useState<any[]>([]);
    const [areas, setAreas] = useState<any[]>([]);
    const [counts, setCounts] = useState<any[]>([]);
    const [icons, setIcons] = useState<any[]>([]); // Para los íconos
    const [isDrawing, setIsDrawing] = useState(false);
    const [color, setColor] = useState<string>("#000000");
    const [lineWidth, setLineWidth] = useState<number>(2); // Grosor de línea
    const [savedImage, setSavedImage] = useState<string | null>(null);
    const [history, setHistory] = useState<any[]>([]); // Para almacenar el historial de cambios
    const stageRef = useRef<any>(null);
    const [image] = useImage(image1); // Usa una imagen local

    // Handle mouse down event for drawing
    const handleMouseDown = (e: any) => {
        const pos = e.target.getStage().getPointerPosition();
        setHistory([...history, { lines: [...lines], areas: [...areas], counts: [...counts], icons: [...icons] }]); // Guardar el estado antes de cambiar

        if (tool === "line") {
            setLines([...lines, { points: [pos.x, pos.y], color, lineWidth }]);
            setIsDrawing(true);
        }

        if (tool === "area") {
            setAreas([...areas, { x: pos.x, y: pos.y, width: 0, height: 0, color, lineWidth }]);
            setIsDrawing(true);
        }

        if (tool === "count") {
            setCounts([...counts, { x: pos.x, y: pos.y, radius: 5, color }]);
        }

        if (tool === "icon") {
            setIcons([...icons, { x: pos.x, y: pos.y, type: 'x' }]);
        }
    };

    // Handle mouse move event for drawing
    const handleMouseMove = (e: any) => {
        if (!isDrawing) return;

        const pos = e.target.getStage().getPointerPosition();

        if (tool === "line") {
            const lastLine = lines[lines.length - 1];
            const startX = lastLine.points[0];
            const startY = lastLine.points[1];

            const newPoints = Math.abs(pos.x - startX) > Math.abs(pos.y - startY)
                ? [startX, startY, pos.x, startY] // Línea horizontal
                : [startX, startY, startX, pos.y]; // Línea vertical

            lastLine.points = newPoints;
            lines.splice(lines.length - 1, 1, lastLine);
            setLines([...lines]);
        }

        if (tool === "area") {
            const lastArea = areas[areas.length - 1];
            lastArea.width = pos.x - lastArea.x;
            lastArea.height = pos.y - lastArea.y;
            areas.splice(areas.length - 1, 1, lastArea);
            setAreas([...areas]);
        }
    };

    // Handle mouse up event to finish drawing
    const handleMouseUp = () => {
        setIsDrawing(false);
    };

    // Save canvas as image
    const saveImage = () => {
        if (stageRef.current) {
            try {
                const dataURL = stageRef.current.toDataURL();
                setSavedImage(dataURL);
            } catch (error) {
                console.error("Error saving image:", error);
            }
        }
    };

    // Undo the last change
    const undoLastChange = () => {
        if (history.length > 0) {
            const lastState = history.pop();
            setLines(lastState.lines);
            setAreas(lastState.areas);
            setCounts(lastState.counts);
            setIcons(lastState.icons);
            setHistory([...history]);
        }
    };

    return (
        <>
            <h4 className="text-center text-blue-500 font-bold text-4xl">Gesti Editor</h4>
            <div className="flex items-center">
                <div className="flex gap-2 flex-col m-5 items-center">
                    <button className="p-2 rounded-lg border w-full flex items-center justify-center" onClick={() => setTool("line")}>
                        <FaBrush />
                    </button>
                    <button className="p-2 rounded-lg border w-full flex items-center justify-center" onClick={() => setTool("area")}>
                        <FaSquare />
                    </button>
                    <button className="p-2 rounded-lg border w-full flex items-center justify-center" onClick={() => setTool("count")}>
                        <FaRegDotCircle />
                    </button>
                    <button className="p-2 rounded-lg border w-full flex items-center justify-center" onClick={() => setTool("icon")}>
                        <FaTimes />
                    </button>
                    <div className="h-5 w-5 flex items-center justify-center">
                        <input
                            type="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            className="p-2 rounded-lg bg-gray-200"
                            title="Selecciona un color"
                        />
                    </div>
                    <div className="flex gap-2 items-center mt-5">
                        <label htmlFor="lineWidth" className="text-blue-500 font-bold">Grosor:</label>
                        <input
                            id="lineWidth"
                            type="number"
                            min="1"
                            max="10"
                            value={lineWidth}
                            onChange={(e) => setLineWidth(parseInt(e.target.value, 10))}
                            className="p-2 rounded-lg border bg-gray-200"
                        />
                    </div>
                    <button className="p-2 rounded-lg border mt-5 flex items-center justify-center" onClick={saveImage}>
                        <AiOutlineSave />
                    </button>
                    <button className="p-2 rounded-lg border mt-2 flex items-center justify-center" onClick={undoLastChange}>
                        <AiOutlineUndo />
                    </button>
                </div>

                <Stage
                    ref={stageRef}
                    width={800}
                    height={600}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    style={{ border: "1px solid black" }}
                >
                    <Layer>
                        {image && (
                            <KonvaImage
                                image={image}
                                width={800}
                                height={600}
                            />
                        )}
                    </Layer>

                    <Layer>
                        {lines.map((line, index) => (
                            <Line
                                key={index}
                                points={line.points}
                                stroke={line.color}
                                strokeWidth={line.lineWidth}
                                tension={0.5}
                                lineCap="round"
                                lineJoin="round"
                            />
                        ))}
                        {areas.map((area, index) => (
                            <Rect
                                key={index}
                                x={area.x}
                                y={area.y}
                                width={area.width}
                                height={area.height}
                                stroke={area.color}
                                strokeWidth={area.lineWidth}
                            />
                        ))}
                        {counts.map((count, index) => (
                            <Circle
                                key={index}
                                x={count.x}
                                y={count.y}
                                radius={count.radius}
                                fill={count.color}
                            />
                        ))}
                        {icons.map((icon, index) => (
                            <Text
                                key={index}
                                text="X"
                                x={icon.x}
                                y={icon.y}
                                fontSize={24}
                                fill="black"
                            />
                        ))}
                        {counts.length > 0 && (
                            <Text
                                text={`Conteo: ${counts.length}`}
                                x={10}
                                y={10}
                                fontSize={20}
                                fill="black"
                            />
                        )}
                    </Layer>
                </Stage>

                {savedImage && (
                    <div className="mt-5">
                        <h5 className="text-center text-blue-500 font-bold">Imagen Guardada:</h5>
                        <img src={savedImage} alt="Saved" style={{ maxWidth: "100%", height: "auto" }} />
                    </div>
                )}
            </div>
        </>
    );
};

export default CanvasComponent;
