export let previousPanCoordinates = null;
/**
 * Sets the previous pan coordinates to the provided coordinates.
 *
 * @param {Object} coordinates - The coordinates to set as the previous pan coordinates.
 * @param {number} coordinates.x - The x-coordinate of the pan.
 * @param {number} coordinates.y - The y-coordinate of the pan.
 * @param {number} coordinates.scale - The y-coordinate of the pan.
 * @return {void} This function does not return anything.
 */
export const rememberPreviousPanCoordinates = (coordinates) => {
	console.log('rememberPreviousPanCoordinates:', coordinates);
	previousPanCoordinates = coordinates;
};

export const getPreviousPanCoordinates = () => previousPanCoordinates;

export const resetPreviousPanCoordinates = () => {
	previousPanCoordinates = null;
};
