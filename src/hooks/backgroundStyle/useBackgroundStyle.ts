import {useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface UseBackgroundStyleRes {
  backgroundColor: string;
}

const useBackgroundStyle: () => UseBackgroundStyleRes = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
};

export default useBackgroundStyle;
