import { xmlObject } from "../constants/interfaces";

const getObjectFromXML = (xml: Document): xmlObject => {
  const root: any = xml.childNodes[0];
  const lastUpdate: string | null = root.getAttribute("gen");
  const accidents: NodeList = root.childNodes;
  const handleAccidents: Record<string, string | null>[] = [];

  // Node is every single accident
  accidents.forEach((accident: Node) => {
    const accidentProperties: NodeList = accident.childNodes;
    const handleAccident: Record<string, string | null> = {};

    // Node is property of single accident
    accidentProperties.forEach((property: Node) => {
      const name: string = property.nodeName;
      const value_nodes: NodeList = property.childNodes;
      let proper_value: string | null = null;

      // Look for proper string value
      value_nodes.forEach((node: Node) => {
        if (node.nodeValue != "" || undefined) {
          proper_value = node.nodeValue;
        }
      });

      handleAccident[name] = proper_value;
    });

    handleAccidents.push(handleAccident);
  });

  return {
    isLoading: false,
    lastUpdate: lastUpdate,
    accidents: handleAccidents,
  };
};

export default getObjectFromXML;
