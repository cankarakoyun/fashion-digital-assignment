import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useStatistics } from '@/hooks/useStatistics';
import { ProductsMock } from './mock';

describe('useStatistics', () => {

  type TestComponentProps = {
    hook: () => void;
  };

  const TestComponent: React.FC<TestComponentProps> = ({ hook }) => {
    hook();
    return null;
  };

  it('returns the correct results', () => {
    let hookResult: any;

    act(() => {
      render(
        <TestComponent
          hook={() => {
            hookResult = useStatistics(ProductsMock);
          }}
        />
      );
    });

    const expectedResults = {
      result1: 'REVIEW',
      result2: 'Mariposa',
      result3: 'Jake*s Collection',
    };

    expect(hookResult).toEqual(expectedResults);
  });
});