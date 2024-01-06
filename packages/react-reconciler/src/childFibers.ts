import { ReactElementType } from 'shared/ReactTypes';
import { FiberNode } from './fiber';
import { REACT_ELEMENT_TYPE } from '../../shared/ReactSymbols';

function ChildReconciler(shouldTrackEffects: boolean) {
	function reconcileSingleElement(
		returnFiber: FiberNode,
		currentFiber: FiberNode | null,
		element: ReactElementType
	) {}

	return function reconcileChildFibers(
		returnFiber: FiberNode,
		currentFiber: FiberNode | null,
		newChild?: ReactElementType
	) {
		if (typeof newChild === 'object' && newChild !== null) {
			switch (newChild.$$typeof) {
				case REACT_ELEMENT_TYPE:
					return reconcileSingleElement();

				default:
					if (__DEV__) {
						console.warn('not yet implemented types', newChild);
					}
					break;
			}
		}

		// multiple nodes ul > li * 3

		// HostText
		if (typeof newChild === 'string' || typeof newChild === 'number') {
			return reconcileSingleTextNode();
		}
	};
}

export const reconcileChildFibers = ChildReconciler(true);
export const mountChildFiber = ChildReconciler(false);
