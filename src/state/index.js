export let previousPanCoordinates = null;
/**
 * Sets the previous pan coordinates to the provided coordinates.
 *
 * @param {Object} coordinates - The coordinates to set as the previous pan coordinates.
 * @param {Object} coordinates.startCoordinates
 * @param {Object} coordinates.targetCoordinates
 * @param {number} startCoordinates.x - The x-coordinate of the pan.
 * @param {number} startCoordinates.y - The y-coordinate of the pan.
 * @param {number} startCoordinates.scale - The y-coordinate of the pan.
 * @param {number} targetCoordinates.x - The y-coordinate of the pan.
 * @param {number} targetCoordinates.y - The y-coordinate of the pan.
 * @param {number} targetCoordinates.scale - The y-coordinate of the pan.
 * @return {void} This function does not return anything.
 */
export const rememberPreviousPanCoordinates = (coordinates) => {
	previousPanCoordinates = coordinates;
};

export const getPreviousPanCoordinates = () => previousPanCoordinates;

export const resetPreviousPanCoordinates = () => {
	previousPanCoordinates = null;
};
