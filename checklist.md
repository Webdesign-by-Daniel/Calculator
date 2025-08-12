# Calculator Project Checklist

## Variables & Setup
- [x] Define `Number1`, `Number2`, and `operator`
- [x] Create `waitingForNextNumber` flag
- [x] Define `digits` array
- [x] Define `operators` array

## Event Handling
- [x] Add click event listener to all number buttons
- [x] Append clicked digit to `input.textContent`
- [x] Append digit to `Number1` if `waitingForNextNumber` is `false`
- [x] Append digit to `Number2` if `waitingForNextNumber` is `true`
- [x] On operator click: store operator and set `waitingForNextNumber` to `true`

## Calculation Logic
- [x] Implement calculation based on operator (`+`, `-`, `*`, `/`)
- [x] Display calculation result in `input.textContent`
- [x] Reset variables after calculation

## Extra Features
- [x] Add "Clear" button to reset all variables
- [x] Handle decimal points
- [x] Prevent multiple operators in a row
- [x] Prevent multiple decimal points in a single number
- [x] Support chaining operations without pressing "equals"